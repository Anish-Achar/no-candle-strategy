// Written summaries for the dashboard. Numbers are at 10% of equity per trade unless a size is given.
window.NC = window.NC || {};

if (window.NC.EURUSD) window.NC.EURUSD.takeaways = {
  worked: [
    'A wide stop at 5× the NO candle\'s range. With the script\'s other settings it made +$884; every swing-based stop lost between −$361 and −$633.',
    'Wick tolerance of 10 ticks (1 pip). On the original settings this change alone was worth +$531, and the script drops to +$463 at 0 ticks.',
    'Trading both directions. The script made +$364 on longs and +$521 on shorts even though EURUSD fell 2.1%.',
    'Position size up to 75%: +$6,784 with a $2,777 (2.6%) max drawdown.'
  ],
  failed: [
    'Longs on their own. With the script\'s settings, longs only lost −$414, and the best longs-only result anywhere was +$207.',
    'Pivot length 1, the worst single change from the original settings (−$370).',
    'Tight stops and small targets: NO range × 0.5 (−$157) and reward:risk 0.5 (−$205).',
    '100% position size. TradingView issued 1,806 margin calls and the result turned into −$3,717.'
  ],
  note: 'EURUSD fell 2.1% over the period, and the best result overall was shorts only (+$1,109). The script trades 109 times in ten months, just over the 100-trade minimum.'
};

if (window.NC.GBPJPY) window.NC.GBPJPY.takeaways = {
  worked: [
    'A 5× NO-range stop. From the original settings this change alone added +$527; with the script\'s other settings, 4× made +$1,017, 6× made +$659, and every swing-based stop lost money.',
    '"Internal + EMA" trend with EMA 100. The other trend modes made +$639 to +$1,170, and EMA 200 or 300 fell below +$960.',
    'A long setup life (20 candles). Shorter validity cost profit steadily, down to +$1,174 at 3 candles.',
    'Both directions together: longs +$813 and shorts +$802, far more than longs only (+$578) or shorts only (+$467). At 75% size: +$12,670 with a $2,034 (1.9%) max drawdown.'
  ],
  failed: [
    'The EURUSD-tuned v2 settings: +$499 on GBPJPY, but with a $537 drawdown, double the original\'s.',
    'Reward:risk other than 1: 0.5 gave +$659, 1.5 gave +$1,159 from only 75 trades, and 2.5 lost −$438.',
    'Wick tolerance 10, which won on the other three pairs, made only +$751 here (5 ticks is best).',
    '100% position size: 433 margin calls cut the result to +$675.'
  ],
  note: 'GBPJPY rose 1.1% over the period. The main search first settled on +$1,062; the later position-size search found this +$1,615 setup, and a final polish around it found nothing better, so the GBPJPY script was updated to it.'
};

if (window.NC.GBPUSD) window.NC.GBPUSD.takeaways = {
  worked: [
    'Wick tolerance of 10 ticks. It was the biggest single improvement on the original settings (+$591); the script falls to +$715 at 2 ticks and +$378 at 0.',
    'A 5× NO-range stop together with reward:risk 1: +$1,447. The neighbouring stop sizes were much weaker (4× +$211, 6× +$520).',
    'Trend mode and EMA length hardly matter here: every trend mode made +$1,102 to +$1,447, and EMA 50 to 300 made +$1,217 to +$1,447.',
    'Both directions while price went nowhere (−0.3%): longs +$625, shorts +$822. At 75% size: +$11,305 with a $2,337 (2.2%) max drawdown.'
  ],
  failed: [
    'Wide stops on their own. On the original settings, 4× and 5× stops lost more (−$338 and −$309); they only pay off together with wick tolerance 10 and reward:risk 1.',
    'Reward:risk above 1. At 1.5 the script turns into −$94.',
    'Longs only: −$103 with the script\'s settings.',
    '100% position size: 1,518 margin calls and −$1,510.'
  ],
  note: 'The stop multiplier and wick tolerance are this script\'s fragile settings. Small changes to either cost more than half the profit.'
};

if (window.NC.AUDJPY) window.NC.AUDJPY.takeaways = {
  worked: [
    'A swing stop placed beyond the swing candle\'s wick, with a 20-tick buffer. Every "beyond the wick" swing stop made +$1,993 to +$2,312; the same stops without the wick made +$1,325 to +$1,582.',
    'Wick tolerance of 10 ticks again: 5 ticks gave +$1,348 and 0 ticks +$261.',
    'A short setup life (3 candles) with one pending setup, and "Internal only" trend.',
    'Both directions: longs +$1,436, shorts +$875. At 75% size: +$18,568 with a $2,609 (2.5%) max drawdown.'
  ],
  failed: [
    'NO-range stops, the winner on the other pairs. With the script\'s other settings the best was 6× at +$484, and every multiplier of 5× or smaller lost money.',
    'Reward:risk above 1: 1.5 gave +$874 but broke the drawdown cap, and 3 lost −$544.',
    'Other trend modes: "EMA only" +$1,346 and "Internal + EMA" +$1,456, against +$2,312 for "Internal only".',
    '100% position size: 1,017 margin calls and −$1,852.'
  ],
  note: 'AUDJPY rose 7.9% over the period, which helped the longs. It is the strongest pair in this test and the only one whose best stop is swing-based.'
};

window.NC_OVERVIEW = {
  takeaways: {
    worked: [
      'Reward:risk 1. All four scripts use it, and larger targets cut profit on every pair.',
      'Wide stops. EURUSD, GBPJPY and GBPUSD use 5× the NO candle\'s range; AUDJPY uses a swing stop 20 ticks beyond the wick. Tight stops (0.5–1× the range) lost money on every pair.',
      'Wick tolerance of 5–10 ticks (0.5–1 pip). Requiring the open to sit exactly on the high or low, the original default, was weaker on every pair.',
      'Trading both directions. Every script makes money on both longs and shorts.',
      'Sizing up to 75% of equity per trade. The safer setups make +$6,784 (EURUSD) to +$18,568 (AUDJPY), with max drawdown between 1.9% and 2.6% of the account.',
      'Leverage against the S&P 500 (+13.1%). At 10× (100% of equity per trade), AUDJPY, GBPJPY and GBPUSD returned +15% to +25%; at 20× all four beat it (+19% to +57%), and at 50× they returned +52% to +197% with no margin calls.'
    ],
    failed: [
      'The original settings, which lost money on all four pairs (−$31 to −$280).',
      'One set of settings for every pair. The EURUSD-tuned v2 settings doubled the drawdown on GBPJPY, and AUDJPY needs a different kind of stop from the others.',
      '100% of equity per trade. Every pair hit hundreds of margin calls, so 75% is the practical ceiling.',
      'EURUSD at 10× leverage: +9.1%, short of the S&P 500. It trades the least (109 times) and needs 20× to beat the index. At 50×, max drawdowns reach 12–16%, above the S&P 500\'s 9.1%.',
      'A separate aggressive setup. On all four pairs the most profitable longs + shorts settings already passed your drawdown guardrail, so it matched the safer setup, and the $10,000 limit was never reached before margin calls set in.'
    ],
    note: 'Every result is in-sample, with no commission or spread. Each pair was run on its own $100K account; the four safer setups add up to about +$49,300 at 75% size over the ten months.'
  }
};
