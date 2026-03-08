"""
Train a market stress / direction model using FRED-style datasets.

Supports:
- St. Louis Fed Financial Stress Index (quantification metric)
- CBOE VIX (volatility)
- S&P 500 (equity returns)

Data format: CSV with columns [Date, Value] or [date, value].
For S&P 500, we compute daily returns and label: 0 = down, 1 = up.

Usage:
  python train_market_model.py

Place CSVs in data-attachments/:
  - financial_stress_index.csv   (St. Louis Fed Financial Stress Index)
  - vix.csv                      (CBOE Volatility Index)
  - sp500.csv                    (S&P 500 index levels)
"""

from pathlib import Path

import joblib
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler


def load_csv(base_dir: Path, filename: str) -> pd.DataFrame | None:
    path = base_dir / filename
    if not path.exists():
        return None
    df = pd.read_csv(path)
    df.columns = [c.strip().lower() for c in df.columns]
    if "date" not in df.columns and len(df.columns) >= 2:
        df.columns = ["date", "value"] + list(df.columns[2:])
    return df


def prepare_sp500_labels(base_dir: Path) -> tuple[np.ndarray, np.ndarray] | None:
    """Use S&P 500 returns to create up/down labels."""
    df = load_csv(base_dir, "sp500.csv")
    if df is None:
        return None
    date_col = "date" if "date" in df.columns else df.columns[0]
    value_col = "value" if "value" in df.columns else [c for c in df.columns if c not in (date_col,)][0]
    df = df.sort_values(date_col).dropna()
    df["return"] = df[value_col].pct_change()
    df = df.dropna()
    y = (df["return"] > 0).astype(int).values
    return df[[value_col, "return"]].values.astype(np.float64), y


def prepare_stress_features(base_dir: Path) -> np.ndarray | None:
    """Load stress index and VIX as features."""
    stress = load_csv(base_dir, "financial_stress_index.csv")
    vix = load_csv(base_dir, "vix.csv")
    if stress is None and vix is None:
        return None
    dfs = []
    if stress is not None:
        vc = [c for c in stress.columns if "value" in c or "index" in c or stress.columns[1] == c][:1]
        stress_val = stress.iloc[:, 1] if len(stress.columns) > 1 else stress.iloc[:, 0]
        dfs.append(pd.DataFrame({"stress": stress_val.values}))
    if vix is not None:
        vc = [c for c in vix.columns if "value" in c or "index" in c or vix.columns[1] == c][:1]
        vix_val = vix.iloc[:, 1] if len(vix.columns) > 1 else vix.iloc[:, 0]
        dfs.append(pd.DataFrame({"vix": vix_val.values}))
    if not dfs:
        return None
    return pd.concat(dfs, axis=1).ffill().fillna(0).values


def main():
    here = Path(__file__).resolve().parent
    data_base = here / "data-attachments"
    if not data_base.exists():
        data_base = here.parent / "data-attachments"

    print(f"[info] Looking for data in: {data_base}")

    # Try S&P 500 first (like original news model)
    result = prepare_sp500_labels(data_base)
    if result is None:
        print(
            "[info] No sp500.csv found. Place FRED S&P 500 data as data-attachments/sp500.csv "
            "with columns: date, value"
        )
        print("[info] Download from: https://fred.stlouisfed.org/series/SP500")
        return

    X_raw, y = result
    ret = X_raw[:, 1]
    # Use returns and lagged returns as features
    X = np.column_stack([
        ret[2:],
        ret[1:-1],
        ret[:-2],
    ])
    y = y[2:]
    n = min(len(X), len(y))
    X, y = X[:n], y[:n]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    scaler = StandardScaler()
    X_train_s = scaler.fit_transform(X_train)
    X_test_s = scaler.transform(X_test)

    clf = LogisticRegression(max_iter=400, solver="lbfgs")
    clf.fit(X_train_s, y_train)
    y_pred = clf.predict(X_test_s)
    print(f"\n[metrics] Test accuracy: {accuracy_score(y_test, y_pred):.3f}")
    print(classification_report(y_test, y_pred, digits=3))

    out_dir = here / "models"
    out_dir.mkdir(parents=True, exist_ok=True)
    path = out_dir / "market_direction_model.joblib"
    joblib.dump({"scaler": scaler, "model": clf}, path)
    print(f"\n[info] Saved model to: {path}")


if __name__ == "__main__":
    main()
