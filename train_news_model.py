import os
from pathlib import Path

import joblib
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, accuracy_score
from sklearn.model_selection import train_test_split


def load_combined_news_csv(base_dir: Path) -> pd.DataFrame:
  """
  Load the Combined_News_DJIA.csv file.

  Expected schema (Kaggle DJIA dataset):
  - Date
  - Label (0 = down, 1 = up)
  - Top1 ... Top25 (headline strings)
  """
  candidates = [
    base_dir / "Combined_News_DJIA.csv",
    base_dir / "combined_News_DJIA.csv",
    base_dir / "attachments (10)" / "Combined_News_DJIA.csv",
  ]

  for path in candidates:
    if path.exists():
      print(f"[info] Using dataset at: {path}")
      return pd.read_csv(path, encoding="utf-8", engine="python")

  raise FileNotFoundError(
    "Could not find Combined_News_DJIA.csv in the expected locations. "
    "Make sure the zip is extracted and the CSV is in the same folder "
    "as this script or in a nearby 'attachments (10)' directory."
  )


def combine_headlines(row: pd.Series) -> str:
  """Concatenate all TopN headline columns for a single day into one text blob."""
  texts = []
  for col in row.index:
    if col.lower().startswith("top"):
      val = str(row[col])
      if val and val != "nan":
        texts.append(val)
  return " ".join(texts)


def prepare_dataset(df: pd.DataFrame) -> tuple[np.ndarray, np.ndarray]:
  """Convert the raw dataframe into X (texts) and y (labels)."""
  if "Label" not in df.columns:
    raise ValueError("Expected a 'Label' column in Combined_News_DJIA.csv.")

  # Clean missing values
  df = df.fillna("")

  # Combine Top1..Top25 into a single text field
  text_series = df.apply(combine_headlines, axis=1)

  # Basic normalization
  X_text = (
    text_series.astype(str)
    .str.replace(r"[^a-zA-Z\s]", " ", regex=True)
    .str.lower()
    .str.replace(r"\s+", " ", regex=True)
    .str.strip()
  )

  y = df["Label"].astype(int).values
  return X_text.values, y


def train_model(X_text: np.ndarray, y: np.ndarray):
  """Train a simple TF‑IDF + logistic regression classifier."""
  X_train, X_test, y_train, y_test = train_test_split(
    X_text, y, test_size=0.2, random_state=42, stratify=y
  )

  vectorizer = TfidfVectorizer(
    max_features=5000,
    ngram_range=(1, 2),
    stop_words="english",
    min_df=2,
  )

  clf = LogisticRegression(
    max_iter=400,
    n_jobs=-1,
    solver="lbfgs",
  )

  print("[info] Fitting TF‑IDF vectorizer...")
  X_train_vec = vectorizer.fit_transform(X_train)
  X_test_vec = vectorizer.transform(X_test)

  print("[info] Training logistic regression classifier...")
  clf.fit(X_train_vec, y_train)

  y_pred = clf.predict(X_test_vec)
  acc = accuracy_score(y_test, y_pred)
  print(f"\n[metrics] Test accuracy: {acc:.3f}\n")
  print("[metrics] Detailed classification report:")
  print(classification_report(y_test, y_pred, digits=3))

  return vectorizer, clf


def save_model(vectorizer, clf, out_dir: Path) -> Path:
  out_dir.mkdir(parents=True, exist_ok=True)
  model_path = out_dir / "news_direction_model.joblib"

  joblib.dump({"vectorizer": vectorizer, "model": clf}, model_path)
  print(f"\n[info] Saved model to: {model_path}")
  return model_path


def main():
  here = Path(__file__).resolve().parent

  # Try to locate the extracted CSVs relative to this script.
  # If you moved the files, update this path.
  data_base = here / "data-attachments"
  if not data_base.exists():
    # Fall back: look one level up (e.g. if you unzipped to your user folder)
    data_base = here.parent / "data-attachments"

  print(f"[info] Looking for data in: {data_base}")

  df = load_combined_news_csv(data_base)
  print(f"[info] Loaded {len(df)} rows.")

  X_text, y = prepare_dataset(df)
  print("[info] Prepared dataset. Example document:")
  if len(X_text):
    print("-----")
    print(X_text[0][:400], "..." if len(X_text[0]) > 400 else "")
    print("-----")

  vectorizer, clf = train_model(X_text, y)
  save_model(vectorizer, clf, here / "models")


if __name__ == "__main__":
  main()

