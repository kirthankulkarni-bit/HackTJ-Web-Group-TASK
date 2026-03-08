# Geographic Market Shock Simulator

A **browser-based geographic stock market shock simulator** with analytics. Uses a synthetic model (no real data in the simulator) to show how regions react to macro shocks.

## Features

### Simulator tab
- **Focus region** — Enter any supported region (50+): US, UK, Germany, Japan, China, Brazil, etc. Unsupported regions show an error.
- **Geographic map** — North America, Europe, Asia-Pacific, Emerging Markets glow under stress.
- **Scenario presets** — Global crisis, Tech bust, Energy shock, Pandemic, Custom.
- **Metric definitions** — Expandable section explaining shock magnitude, duration, and volatility.
- **Index chart** — Synthetic equity path for the focused region and sector.

### Analytics & Insights tab
- **Industry Impact Heatmap** — Energy, defense, semiconductors, airlines, financials, tech, healthcare.
- **Stocks most likely to move** — Representative companies (up/down by sector).
- **Quantification metric** — Stress score 0–10 (inspired by St. Louis Fed Financial Stress Index).
- **Biggest industry by country** — Primary industry for each supported region.
- **Data sources** — Methodology and reference datasets (FRED, VIX, S&P 500).
- **Historical comparison** — 2008 GFC, 2020 pandemic, 2001 tech bust.
- **Time-horizon simulations** — 1 wk, 1 m, 1 yr, 5 yr projections.

All simulator dynamics are **synthetic** and for educational use only.

## Getting started

1. Open `index.html` in a browser, or run `npm run start` and open the URL.
2. Enter a focus region (e.g. Germany, Japan).
3. Pick a scenario and click **Run simulation**.

## Training models (optional)

### News model
Uses DJIA news headlines to predict market direction.

```bash
pip install -r requirements.txt
# Place Combined_News_DJIA.csv in data-attachments/
python train_news_model.py
```

### Market model (FRED datasets)
Uses S&P 500, VIX, Financial Stress Index for direction/stress.

```bash
# Download from FRED (fred.stlouisfed.org):
#   - SP500, VIXCLS, STLFSI4
# Save as data-attachments/sp500.csv, vix.csv, financial_stress_index.csv
python train_market_model.py
```

Outputs are saved under `models/`.