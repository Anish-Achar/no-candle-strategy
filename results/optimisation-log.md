# "the srat" (NO Candle Strategy) — settings optimization

- **Date run:** 2026-09-26
- **Market:** OANDA:EURUSD, 15m, Nov 30 2025 – Sep 25 2026 (full available range, no hold-out)
- **Capital:** $100K, 10% of equity per trade, 0 commission, 2 ticks slippage (script defaults, unchanged)
- **Combinations tested:** 2,212 unique (0 errors)
- **Ranking:** net profit; combos with < 100 trades or max drawdown > $394.69 (the original's) excluded
- **Method:** Stage 1 one-at-a-time sweep → Stage 2 coordinate descent from 12 starts → Stage 3 full grid (wick tol × SL type × RR) around both winners + final polish

## Original settings (baseline)

Net **−$199.27**, 354 trades, 46.6% win, PF 0.876, max DD $394.69

Trend "Internal + EMA", pivot 2, EMA 200, validity 9, pending 3, wick tol 0, SL "Last swing" (buffer 0, no wick), RR 1, longs + shorts

## Winner A — best overall (shorts only)

Net **+$996.79**, 309 trades, 44.7% win, PF 1.433, max DD $166.21

| Setting | Value |
|---|---|
| Trend mode | Either |
| Swing pivot length | 2 |
| EMA length | 200 |
| Setup validity | 7 |
| Max pending setups | 3 |
| Wick tolerance | 5 ticks |
| Stop loss | NO range × multiplier |
| SL multiplier | 3 |
| Reward:risk | 1.5 |
| Longs / Shorts | off / on |

Sensitivity (net / trades when one setting is moved, others fixed):
- EMA: 50 → 866, 100 → 900, 150 → 920, **200 → 997**, 300 → 958
- Pivot: 1 → 883, **2 → 997**, 3 → 948, 4 → 972, 5 → 911
- Validity: 3 → 759, 5 → 884, **7 → 997**, 9 → 793, 12 → 783, 15 → 811, 20 → 804
- Pending: 1 → 963, 2 → 959, **3 → 997**, 4 → 980, 5 → 980
- Wick tol: 0 → 597, 2 → 906, **5 → 997**, 10 → 548
- Trend: Internal+EMA → 441, Internal only → 726, EMA only → 653, **Either → 997**
- SL: NO×1 → 239, NO×1.5 → 442, NO×2 → 828, **NO×3 → 997**; best swing SL → 274
- RR: 0.5 → 546, 1 → 884, **1.5 → 997**, 2 → 554, 2.5 → 655, 3 → 764
- Direction: both → −447, longs only → −621, **shorts only → 997**

## Winner B — best with longs AND shorts

Net **+$868.62**, 102 trades, 48.0% win, PF 1.825, max DD $232.12

Trend "Internal only", pivot 4, EMA 300, validity 9, pending 3, wick tol 0, SL "Last swing" + 10 tick buffer + beyond wick, RR 2

Fragile: pivot 3 → 463, pivot 5 → 101; wick tol 2 → 113; RR 1.5 → 571. Only just clears the 100-trade minimum.

## Top 10 (deduplicated)

| Net | Trades | Win % | PF | Max DD | Trend | Pivot | EMA | Valid | Pend | Wick | SL | RR | Dir |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 996.79 | 309 | 44.7 | 1.433 | 166.21 | Either | 2 | 200 | 7 | 3 | 5 | NO ×3 | 1.5 | short |
| 980.18 | 308 | 44.5 | 1.426 | 182.78 | Either | 2 | 200 | 7 | 4 | 5 | NO ×3 | 1.5 | short |
| 979.74 | 341 | 59.5 | 1.449 | 209.45 | Either | 2 | 150 | 15 | 2 | 2 | NO ×3 | 1 | short |
| 976.14 | 342 | 59.6 | 1.448 | 209.45 | Either | 2 | 150 | 15 | 3 | 2 | NO ×3 | 1 | short |
| 972.69 | 342 | 59.6 | 1.443 | 209.45 | Either | 2 | 150 | 15 | 1 | 2 | NO ×3 | 1 | short |
| 971.99 | 276 | 44.9 | 1.473 | 132.33 | Either | 4 | 200 | 7 | 3 | 5 | NO ×3 | 1.5 | short |
| 962.70 | 311 | 44.4 | 1.407 | 166.15 | Either | 2 | 200 | 7 | 1 | 5 | NO ×3 | 1.5 | short |
| 958.68 | 306 | 44.1 | 1.413 | 182.74 | Either | 2 | 200 | 7 | 2 | 5 | NO ×3 | 1.5 | short |
| 958.00 | 300 | 44.3 | 1.427 | 181.19 | Either | 2 | 300 | 7 | 3 | 5 | NO ×3 | 1.5 | short |
| 951.57 | 341 | 59.5 | 1.429 | 217.84 | Either | 2 | 200 | 15 | 2 | 2 | NO ×3 | 1 | short |

## Longs only — best

Net +$206.66, 180 trades, 35.6% win, PF 1.181, max DD $221.19 — Internal only, pivot 2, EMA 150, validity 3, pending 1, wick tol 0, swing SL + 20 ticks, RR 2

## Caveats

- EURUSD fell ~2.1% over the test period; the top results depend on shorting that move.
- No commission or spread modelled — live results would be lower, especially for high-trade-count settings.
- All results are in-sample (tuned and measured on the same data).
- SL multiplier 3 is the top of the tested range; higher values were not tested. (Superseded: the four-pair run below tested up to 6×.)

---

# Four-pair run (Sep 27 2026)

Same method on OANDA 15m, Nov 30 2025 – Sep 25 2026, with stop multipliers widened to 6× and position size tested from 5% to 100%. 11,142 backtests plus position-size tests. Guardrails for choosing settings: at least 100 trades and max drawdown (at 10% size) no worse than the original settings on that pair. Script defaults = best result with longs + shorts. Dashboard: https://claude.ai/artifact/3TajSzaENCKmEhZtoj7db4

## TradingView scripts

| Script | Was | Defaults | Net @10% | Trades | PF | Max DD @10% |
|---|---|---|---|---|---|---|
| eur/usd strat | "the srat" (renamed) | Internal only, pivot 5, EMA 150, validity 20, pending 3, wick 10, NO range × 5, RR 1 | +$884.48 | 109 | 1.64 | $348.34 |
| gbp/jpy strat | "the srat v2" (renamed) | Internal + EMA, pivot 1, EMA 100, validity 20, pending 4, wick 5, NO range × 5, RR 1 | +$1,614.86 | 135 | 1.96 | $256.12 |
| gbp/usd strat | new copy | Internal only, pivot 5, EMA 50, validity 7, pending 2, wick 10, NO range × 5, RR 1 | +$1,446.90 | 159 | 1.70 | $296.78 |
| aud/jpy strat | new copy | Internal only, pivot 4, EMA 100, validity 3, pending 1, wick 10, last swing +20 ticks beyond wick, RR 1 | +$2,311.70 | 296 | 1.66 | $333.73 |

All four trade longs + shorts, keep 10% of equity per trade as the default, and show their pair in the on-chart title (e.g. "NO Candle Strategy · GBPJPY").

## Position size

75% of equity is the largest size without margin calls on every pair (100% triggers hundreds of margin calls). Max drawdown stays far under the $10,000 limit:

| Pair | Net at 75% | Max DD at 75% |
|---|---|---|
| EURUSD | +$6,783.83 | $2,776.93 (2.6%) |
| GBPJPY | +$12,669.95 | $2,034.15 (1.9%) |
| GBPUSD | +$11,304.71 | $2,336.90 (2.2%) |
| AUDJPY | +$18,567.75 | $2,608.94 (2.5%) |

The "aggressive" search (settings and size chosen together) ended up with the same results as these safer setups on all four pairs.

## Other notes

- Original settings lost money on all four pairs: EURUSD −$199.27, GBPJPY −$30.73, GBPUSD −$279.80, AUDJPY −$58.02.
- Best overall on EURUSD is shorts only: +$1,108.89 (Either, pivot 4, EMA 150, validity 12, wick 5, NO range × 4, RR 1).
- Full raw results: `no-candle-dashboard/nocandle-backup-final.json` (GBPJPY's post-fix runs are in the dashboard data, not in that backup).

## Leverage vs the S&P 500 (same dates)

Each pair script at 10% of equity per trade × leverage (100% / 200% / 500% of equity per trade), margin 10% / 5% / 2%. No margin calls at any level. S&P 500 index buy and hold: 6,849.08 (close Nov 28 2025) → 7,743.41 (close Sep 25 2026) = **+13.06%**, max drawdown 9.10%.

| Pair | 1× (10% size) | 10× | 20× | 50× | Beats S&P from |
|---|---|---|---|---|---|
| EURUSD | +0.88% | +9.12% (DD 3.4%) | +18.88% (DD 6.8%) | +52.20% (DD 16.4%) | 20× |
| GBPJPY | +1.61% | +17.19% (DD 2.5%) | +36.85% (DD 5.0%) | +113.54% (DD 12.1%) | 10× |
| GBPUSD | +1.45% | +15.31% (DD 2.9%) | +32.62% (DD 5.8%) | +98.67% (DD 14.1%) | 10× |
| AUDJPY | +2.31% | +25.42% (DD 3.3%) | +56.61% (DD 6.5%) | +196.81% (DD 15.7%) | 10× |

No spread or commission included; at 50× a typical spread would take a large share of these gains. Many regulators cap retail forex leverage (e.g. 30:1 on majors in the UK/EU).
