window.NS_DATA = {
 "snapshot": "2026-10-15T17:24:50Z",
 "lm_metric": "validation cross-entropy per message (nats), 939 fixed windows of 4,096 messages",
 "runs": [
  {
   "name": "smoke 1",
   "kind": "smoke",
   "desc": "First end-to-end smoke test of the trainer.",
   "start": "2026-10-12T17:29:09Z",
   "end": "2026-10-12T17:29:19Z",
   "status": "failed",
   "note": "Stopped after 20 steps while wiring up evaluation; no score.",
   "budget_h": 0.05,
   "no_book": false,
   "params_m": null,
   "points": []
  },
  {
   "name": "smoke 2",
   "kind": "smoke",
   "desc": "5-minute smoke test on two nodes.",
   "start": "2026-10-12T17:32:16Z",
   "end": "2026-10-12T17:37:16Z",
   "status": "finished",
   "note": null,
   "budget_h": 0.08,
   "no_book": false,
   "params_m": 29.15,
   "points": [
    {
     "t": "2026-10-12T17:37:16Z",
     "hours": 0.08,
     "step": 113,
     "tokens_b": 0.29,
     "val": 67.143,
     "test": 68.604,
     "final": true
    }
   ]
  },
  {
   "name": "baseline r1",
   "kind": "baseline",
   "desc": "First 10 h baseline attempt.",
   "start": "2026-10-12T17:39:29Z",
   "end": "2026-10-12T18:44:06Z",
   "status": "failed",
   "note": "Crashed at the first evaluation: reading eval windows took 12 min, one node fell behind and hit the collective timeout. Fix: preload eval windows.",
   "budget_h": 10.0,
   "no_book": false,
   "params_m": null,
   "points": []
  },
  {
   "name": "smoke 3",
   "kind": "smoke",
   "desc": "Smoke test after the eval-preload fix.",
   "start": "2026-10-12T19:00:02Z",
   "end": "2026-10-12T19:03:48Z",
   "status": "finished",
   "note": null,
   "budget_h": 0.06,
   "no_book": false,
   "params_m": 29.15,
   "points": [
    {
     "t": "2026-10-12T19:02:36Z",
     "hours": 0.04,
     "step": 32,
     "tokens_b": 0.1,
     "val": 86.641,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-12T19:03:48Z",
     "hours": 0.06,
     "step": 37,
     "tokens_b": 0.15,
     "val": 83.137,
     "test": 83.531,
     "final": true
    }
   ]
  },
  {
   "name": "baseline r2",
   "kind": "baseline",
   "desc": "Second baseline attempt.",
   "start": "2026-10-12T19:09:35Z",
   "end": "2026-10-12T22:10:15Z",
   "status": "failed",
   "note": "Loss became NaN at 2.4 h: extreme mid-price deltas on empty-side book rows overflowed in fp16. Fix: fp32 book input.",
   "budget_h": 10.0,
   "no_book": false,
   "params_m": null,
   "points": []
  },
  {
   "name": "smoke 4",
   "kind": "smoke",
   "desc": "Smoke test after the fp32-book fix.",
   "start": "2026-10-12T22:59:23Z",
   "end": "2026-10-12T23:01:56Z",
   "status": "finished",
   "note": null,
   "budget_h": 0.04,
   "no_book": false,
   "params_m": 29.15,
   "points": [
    {
     "t": "2026-10-12T23:01:25Z",
     "hours": 0.03,
     "step": 23,
     "tokens_b": 0.08,
     "val": 101.136,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-12T23:01:56Z",
     "hours": 0.04,
     "step": 25,
     "tokens_b": 0.09,
     "val": 99.562,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-12T23:01:56Z",
     "hours": 0.04,
     "step": 25,
     "tokens_b": 0.09,
     "val": 99.562,
     "test": 99.175,
     "final": true
    }
   ]
  },
  {
   "name": "baseline r3",
   "kind": "baseline",
   "desc": "Third baseline attempt.",
   "start": "2026-10-12T23:01:02Z",
   "end": "2026-10-12T23:43:31Z",
   "status": "failed",
   "note": "Stopped at 0.7 h by decision: empty-side rows are data errors and must be excluded, not clipped.",
   "budget_h": 10.0,
   "no_book": false,
   "params_m": null,
   "points": []
  },
  {
   "name": "smoke 5",
   "kind": "smoke",
   "desc": "Smoke test with bad-row exclusion on dataset v2.",
   "start": "2026-10-13T15:49:07Z",
   "end": "2026-10-13T16:13:17Z",
   "status": "finished",
   "note": null,
   "budget_h": 0.4,
   "no_book": false,
   "params_m": 29.15,
   "points": [
    {
     "t": "2026-10-13T16:07:15Z",
     "hours": 0.3,
     "step": 578,
     "tokens_b": 1.28,
     "val": 34.586,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-13T16:13:17Z",
     "hours": 0.4,
     "step": 604,
     "tokens_b": 1.5,
     "val": 33.483,
     "test": 34.901,
     "final": true
    }
   ]
  },
  {
   "name": "baseline r4",
   "kind": "baseline",
   "desc": "26-token messages + 10-level book vector, 10 h on 8 GPUs. The reference.",
   "start": "2026-10-13T16:12:32Z",
   "end": "2026-10-14T02:12:35Z",
   "status": "finished",
   "note": null,
   "budget_h": 10.0,
   "no_book": false,
   "params_m": 29.15,
   "points": [
    {
     "t": "2026-10-13T22:12:37Z",
     "hours": 6.0,
     "step": 10456,
     "tokens_b": 23.32,
     "val": 12.393,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-13T23:12:44Z",
     "hours": 7.0,
     "step": 10708,
     "tokens_b": 25.46,
     "val": 11.894,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-14T00:12:39Z",
     "hours": 8.0,
     "step": 10959,
     "tokens_b": 27.6,
     "val": 11.464,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-14T01:12:37Z",
     "hours": 9.0,
     "step": 11210,
     "tokens_b": 29.74,
     "val": 11.388,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-14T02:12:35Z",
     "hours": 10.0,
     "step": 11461,
     "tokens_b": 31.88,
     "val": 11.349,
     "test": 12.054,
     "final": true
    }
   ]
  },
  {
   "name": "no-book ablation",
   "kind": "ablation",
   "desc": "Baseline without the order-book input, same budget.",
   "start": "2026-10-15T08:51:42Z",
   "end": "2026-10-15T17:17:20Z",
   "status": "running",
   "note": null,
   "budget_h": 10.0,
   "no_book": true,
   "params_m": null,
   "points": [
    {
     "t": "2026-10-15T14:51:42Z",
     "hours": 6.0,
     "step": 13525,
     "tokens_b": 29.71,
     "val": 11.913,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-15T15:51:45Z",
     "hours": 7.0,
     "step": 13820,
     "tokens_b": 32.22,
     "val": 11.504,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-15T16:51:50Z",
     "hours": 8.0,
     "step": 14115,
     "tokens_b": 34.74,
     "val": 11.301,
     "test": null,
     "final": false
    }
   ]
  },
  {
   "name": "new tokens \u00b7 smoke",
   "kind": "scenario",
   "desc": "Scenario (a), new message tokenization, smoke test.",
   "start": "2026-10-15T08:53:19Z",
   "end": "2026-10-15T09:08:24Z",
   "status": "finished",
   "note": null,
   "budget_h": 0.25,
   "no_book": false,
   "params_m": 29.26,
   "points": [
    {
     "t": "2026-10-15T09:08:24Z",
     "hours": 0.25,
     "step": 828,
     "tokens_b": 0.68,
     "val": 16.649,
     "test": 20.53,
     "final": true
    }
   ]
  },
  {
   "name": "field embedding \u00b7 smoke",
   "kind": "scenario",
   "desc": "Field embedding (27 positions per message), smoke test.",
   "start": "2026-10-15T09:07:33Z",
   "end": "2026-10-15T09:25:39Z",
   "status": "finished",
   "note": null,
   "budget_h": 0.3,
   "no_book": false,
   "params_m": 39.13,
   "points": [
    {
     "t": "2026-10-15T09:20:11Z",
     "hours": 0.21,
     "step": 452,
     "tokens_b": 1.05,
     "val": 28.064,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-15T09:25:39Z",
     "hours": 0.3,
     "step": 481,
     "tokens_b": 1.3,
     "val": 26.887,
     "test": 30.033,
     "final": true
    }
   ]
  },
  {
   "name": "field embedding",
   "kind": "scenario",
   "desc": "Field embedding: per-field tables and heads, same budget.",
   "start": "2026-10-15T09:07:44Z",
   "end": "2026-10-15T17:18:22Z",
   "status": "running",
   "note": null,
   "budget_h": 10.0,
   "no_book": false,
   "params_m": null,
   "points": [
    {
     "t": "2026-10-15T15:07:45Z",
     "hours": 6.0,
     "step": 9617,
     "tokens_b": 23.5,
     "val": 12.194,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-15T16:07:55Z",
     "hours": 7.0,
     "step": 9913,
     "tokens_b": 26.02,
     "val": 12.913,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-15T17:07:49Z",
     "hours": 8.0,
     "step": 10208,
     "tokens_b": 28.53,
     "val": 11.694,
     "test": null,
     "final": false
    }
   ]
  },
  {
   "name": "new tokens (a)",
   "kind": "scenario",
   "desc": "Scenario (a): new message tokenization, same budget as the baseline.",
   "start": "2026-10-15T09:11:59Z",
   "end": "2026-10-15T17:21:20Z",
   "status": "running",
   "note": null,
   "budget_h": 10.0,
   "no_book": false,
   "params_m": null,
   "points": [
    {
     "t": "2026-10-15T15:12:03Z",
     "hours": 6.0,
     "step": 23287,
     "tokens_b": 34.54,
     "val": 10.421,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-15T16:12:01Z",
     "hours": 7.0,
     "step": 23868,
     "tokens_b": 37.78,
     "val": 10.358,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-15T17:12:03Z",
     "hours": 8.0,
     "step": 24450,
     "tokens_b": 41.02,
     "val": 10.297,
     "test": null,
     "final": false
    }
   ]
  }
 ],
 "scores": {
  "return:8:pearson": {
   "bench": "return",
   "h": 8,
   "metric": "pearson",
   "label": "pooled Pearson, 8 messages ahead",
   "better": "higher",
   "unit": "",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.1078,
     "kv": [
      "70,185 decisions",
      "Pearson 0.108 \u00b7 direction 0.599",
      "10 bp weighted Pearson 0.408"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.2912,
     "kv": [
      "70,185 decisions",
      "Pearson 0.291 \u00b7 direction 0.685",
      "10 bp weighted Pearson 0.271"
     ]
    }
   ],
   "baselines": [
    {
     "name": "last-trade rule",
     "value": 0.0631
    },
    {
     "name": "book imbalance",
     "value": 0.077
    },
    {
     "name": "random direction",
     "value": 0.0042
    }
   ]
  },
  "return:8:direction_acc": {
   "bench": "return",
   "h": 8,
   "metric": "direction_acc",
   "label": "direction accuracy, 8 messages ahead",
   "better": "higher",
   "unit": "",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.5994,
     "kv": [
      "70,185 decisions",
      "Pearson 0.108 \u00b7 direction 0.599",
      "10 bp weighted Pearson 0.408"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.6855,
     "kv": [
      "70,185 decisions",
      "Pearson 0.291 \u00b7 direction 0.685",
      "10 bp weighted Pearson 0.271"
     ]
    }
   ],
   "baselines": [
    {
     "name": "last-trade rule",
     "value": 0.5984
    },
    {
     "name": "book imbalance",
     "value": 0.6315
    },
    {
     "name": "random direction",
     "value": 0.506
    }
   ]
  },
  "pnl:8:A:x": {
   "bench": "pnl",
   "h": 8,
   "variant": "A",
   "sizing": "x",
   "label": "PnL A, bps per bet, 8 messages, equal $1 bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.081,
     "kv": [
      "daily t 20.1 over 20 days (indicative)",
      "hit rate 0.177 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.161,
     "kv": [
      "daily t 29.5 over 20 days (indicative)",
      "hit rate 0.203 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    },
    {
     "name": "last-trade rule",
     "value": 0.076
    },
    {
     "name": "book imbalance",
     "value": 0.085
    }
   ]
  },
  "pnl:8:A:y": {
   "bench": "pnl",
   "h": 8,
   "variant": "A",
   "sizing": "y",
   "label": "PnL A, bps per bet, 8 messages, volatility-scaled bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.168,
     "kv": [
      "daily t 23.6 over 20 days (indicative)",
      "hit rate 0.177 \u00b7 70,185 bets",
      "mean half spread 2.48 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.548,
     "kv": [
      "daily t 25.3 over 20 days (indicative)",
      "hit rate 0.203 \u00b7 70,185 bets",
      "mean half spread 3.20 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    }
   ]
  },
  "pnl:8:B:x": {
   "bench": "pnl",
   "h": 8,
   "variant": "B",
   "sizing": "x",
   "label": "PnL B, bps per bet, 8 messages, equal $1 bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": -2.41,
     "kv": [
      "daily t -74.5 over 20 days (indicative)",
      "hit rate 0.021 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": -2.33,
     "kv": [
      "daily t -72.0 over 20 days (indicative)",
      "hit rate 0.025 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    },
    {
     "name": "last-trade rule",
     "value": -2.415
    },
    {
     "name": "book imbalance",
     "value": -2.381
    }
   ]
  },
  "pnl:8:B:y": {
   "bench": "pnl",
   "h": 8,
   "variant": "B",
   "sizing": "y",
   "label": "PnL B, bps per bet, 8 messages, volatility-scaled bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": -2.307,
     "kv": [
      "daily t -65.1 over 20 days (indicative)",
      "hit rate 0.021 \u00b7 70,185 bets",
      "mean half spread 2.48 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": -2.649,
     "kv": [
      "daily t -48.3 over 20 days (indicative)",
      "hit rate 0.025 \u00b7 70,185 bets",
      "mean half spread 3.20 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    }
   ]
  },
  "return:64:pearson": {
   "bench": "return",
   "h": 64,
   "metric": "pearson",
   "label": "pooled Pearson, 64 messages ahead",
   "better": "higher",
   "unit": "",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.0896,
     "kv": [
      "70,185 decisions",
      "Pearson 0.090 \u00b7 direction 0.563",
      "10 bp weighted Pearson 0.158"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.258,
     "kv": [
      "70,185 decisions",
      "Pearson 0.258 \u00b7 direction 0.615",
      "10 bp weighted Pearson 0.368"
     ]
    }
   ],
   "baselines": [
    {
     "name": "last-trade rule",
     "value": 0.0655
    },
    {
     "name": "book imbalance",
     "value": 0.067
    },
    {
     "name": "random direction",
     "value": -0.0013
    }
   ]
  },
  "return:64:direction_acc": {
   "bench": "return",
   "h": 64,
   "metric": "direction_acc",
   "label": "direction accuracy, 64 messages ahead",
   "better": "higher",
   "unit": "",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.5635,
     "kv": [
      "70,185 decisions",
      "Pearson 0.090 \u00b7 direction 0.563",
      "10 bp weighted Pearson 0.158"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.6145,
     "kv": [
      "70,185 decisions",
      "Pearson 0.258 \u00b7 direction 0.615",
      "10 bp weighted Pearson 0.368"
     ]
    }
   ],
   "baselines": [
    {
     "name": "last-trade rule",
     "value": 0.5697
    },
    {
     "name": "book imbalance",
     "value": 0.5791
    },
    {
     "name": "random direction",
     "value": 0.4976
    }
   ]
  },
  "pnl:64:A:x": {
   "bench": "pnl",
   "h": 64,
   "variant": "A",
   "sizing": "x",
   "label": "PnL A, bps per bet, 64 messages, equal $1 bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.172,
     "kv": [
      "daily t 12.2 over 20 days (indicative)",
      "hit rate 0.375 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.355,
     "kv": [
      "daily t 35.4 over 20 days (indicative)",
      "hit rate 0.409 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    },
    {
     "name": "last-trade rule",
     "value": 0.163
    },
    {
     "name": "book imbalance",
     "value": 0.146
    }
   ]
  },
  "pnl:64:A:y": {
   "bench": "pnl",
   "h": 64,
   "variant": "A",
   "sizing": "y",
   "label": "PnL A, bps per bet, 64 messages, volatility-scaled bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.28,
     "kv": [
      "daily t 19.7 over 20 days (indicative)",
      "hit rate 0.375 \u00b7 70,185 bets",
      "mean half spread 2.50 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.794,
     "kv": [
      "daily t 33.6 over 20 days (indicative)",
      "hit rate 0.409 \u00b7 70,185 bets",
      "mean half spread 3.22 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    }
   ]
  },
  "pnl:64:B:x": {
   "bench": "pnl",
   "h": 64,
   "variant": "B",
   "sizing": "x",
   "label": "PnL B, bps per bet, 64 messages, equal $1 bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": -2.319,
     "kv": [
      "daily t -69.1 over 20 days (indicative)",
      "hit rate 0.112 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": -2.136,
     "kv": [
      "daily t -73.1 over 20 days (indicative)",
      "hit rate 0.125 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    },
    {
     "name": "last-trade rule",
     "value": -2.328
    },
    {
     "name": "book imbalance",
     "value": -2.32
    }
   ]
  },
  "pnl:64:B:y": {
   "bench": "pnl",
   "h": 64,
   "variant": "B",
   "sizing": "y",
   "label": "PnL B, bps per bet, 64 messages, volatility-scaled bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": -2.217,
     "kv": [
      "daily t -64.7 over 20 days (indicative)",
      "hit rate 0.112 \u00b7 70,185 bets",
      "mean half spread 2.50 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": -2.423,
     "kv": [
      "daily t -50.8 over 20 days (indicative)",
      "hit rate 0.125 \u00b7 70,185 bets",
      "mean half spread 3.22 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    }
   ]
  },
  "return:128:pearson": {
   "bench": "return",
   "h": 128,
   "metric": "pearson",
   "label": "pooled Pearson, 128 messages ahead",
   "better": "higher",
   "unit": "",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.0311,
     "kv": [
      "70,185 decisions",
      "Pearson 0.031 \u00b7 direction 0.519",
      "10 bp weighted Pearson 0.092"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.2027,
     "kv": [
      "70,185 decisions",
      "Pearson 0.203 \u00b7 direction 0.581",
      "10 bp weighted Pearson 0.263"
     ]
    }
   ],
   "baselines": [
    {
     "name": "last-trade rule",
     "value": 0.0734
    },
    {
     "name": "book imbalance",
     "value": 0.0516
    },
    {
     "name": "random direction",
     "value": 0.0043
    }
   ]
  },
  "return:128:direction_acc": {
   "bench": "return",
   "h": 128,
   "metric": "direction_acc",
   "label": "direction accuracy, 128 messages ahead",
   "better": "higher",
   "unit": "",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.5191,
     "kv": [
      "70,185 decisions",
      "Pearson 0.031 \u00b7 direction 0.519",
      "10 bp weighted Pearson 0.092"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.5807,
     "kv": [
      "70,185 decisions",
      "Pearson 0.203 \u00b7 direction 0.581",
      "10 bp weighted Pearson 0.263"
     ]
    }
   ],
   "baselines": [
    {
     "name": "last-trade rule",
     "value": 0.5555
    },
    {
     "name": "book imbalance",
     "value": 0.5451
    },
    {
     "name": "random direction",
     "value": 0.5022
    }
   ]
  },
  "pnl:128:A:x": {
   "bench": "pnl",
   "h": 128,
   "variant": "A",
   "sizing": "x",
   "label": "PnL A, bps per bet, 128 messages, equal $1 bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.088,
     "kv": [
      "daily t 4.8 over 20 days (indicative)",
      "hit rate 0.429 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.445,
     "kv": [
      "daily t 28.6 over 20 days (indicative)",
      "hit rate 0.480 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    },
    {
     "name": "last-trade rule",
     "value": 0.286
    },
    {
     "name": "book imbalance",
     "value": 0.176
    }
   ]
  },
  "pnl:128:A:y": {
   "bench": "pnl",
   "h": 128,
   "variant": "A",
   "sizing": "y",
   "label": "PnL A, bps per bet, 128 messages, volatility-scaled bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.155,
     "kv": [
      "daily t 5.9 over 20 days (indicative)",
      "hit rate 0.429 \u00b7 70,185 bets",
      "mean half spread 2.55 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.938,
     "kv": [
      "daily t 26.6 over 20 days (indicative)",
      "hit rate 0.480 \u00b7 70,185 bets",
      "mean half spread 3.32 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    }
   ]
  },
  "pnl:128:B:x": {
   "bench": "pnl",
   "h": 128,
   "variant": "B",
   "sizing": "x",
   "label": "PnL B, bps per bet, 128 messages, equal $1 bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": -2.403,
     "kv": [
      "daily t -73.5 over 20 days (indicative)",
      "hit rate 0.202 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": -2.046,
     "kv": [
      "daily t -62.1 over 20 days (indicative)",
      "hit rate 0.232 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    },
    {
     "name": "last-trade rule",
     "value": -2.205
    },
    {
     "name": "book imbalance",
     "value": -2.29
    }
   ]
  },
  "pnl:128:B:y": {
   "bench": "pnl",
   "h": 128,
   "variant": "B",
   "sizing": "y",
   "label": "PnL B, bps per bet, 128 messages, volatility-scaled bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": -2.393,
     "kv": [
      "daily t -69.4 over 20 days (indicative)",
      "hit rate 0.202 \u00b7 70,185 bets",
      "mean half spread 2.55 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": -2.377,
     "kv": [
      "daily t -45.3 over 20 days (indicative)",
      "hit rate 0.232 \u00b7 70,185 bets",
      "mean half spread 3.32 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    }
   ]
  },
  "return:512:pearson": {
   "bench": "return",
   "h": 512,
   "metric": "pearson",
   "label": "pooled Pearson, 512 messages ahead",
   "better": "higher",
   "unit": "",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.0304,
     "kv": [
      "70,185 decisions",
      "Pearson 0.030 \u00b7 direction 0.509",
      "10 bp weighted Pearson 0.064"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.1357,
     "kv": [
      "70,185 decisions",
      "Pearson 0.136 \u00b7 direction 0.548",
      "10 bp weighted Pearson 0.194"
     ]
    }
   ],
   "baselines": [
    {
     "name": "last-trade rule",
     "value": 0.0587
    },
    {
     "name": "book imbalance",
     "value": 0.0237
    },
    {
     "name": "random direction",
     "value": -0.0007
    }
   ]
  },
  "return:512:direction_acc": {
   "bench": "return",
   "h": 512,
   "metric": "direction_acc",
   "label": "direction accuracy, 512 messages ahead",
   "better": "higher",
   "unit": "",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.5086,
     "kv": [
      "70,185 decisions",
      "Pearson 0.030 \u00b7 direction 0.509",
      "10 bp weighted Pearson 0.064"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.5481,
     "kv": [
      "70,185 decisions",
      "Pearson 0.136 \u00b7 direction 0.548",
      "10 bp weighted Pearson 0.194"
     ]
    }
   ],
   "baselines": [
    {
     "name": "last-trade rule",
     "value": 0.5339
    },
    {
     "name": "book imbalance",
     "value": 0.5192
    },
    {
     "name": "random direction",
     "value": 0.5007
    }
   ]
  },
  "pnl:512:A:x": {
   "bench": "pnl",
   "h": 512,
   "variant": "A",
   "sizing": "x",
   "label": "PnL A, bps per bet, 512 messages, equal $1 bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.148,
     "kv": [
      "daily t 5.1 over 20 days (indicative)",
      "hit rate 0.466 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.613,
     "kv": [
      "daily t 16.9 over 20 days (indicative)",
      "hit rate 0.502 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    },
    {
     "name": "last-trade rule",
     "value": 0.467
    },
    {
     "name": "book imbalance",
     "value": 0.144
    }
   ]
  },
  "pnl:512:A:y": {
   "bench": "pnl",
   "h": 512,
   "variant": "A",
   "sizing": "y",
   "label": "PnL A, bps per bet, 512 messages, volatility-scaled bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.304,
     "kv": [
      "daily t 6.2 over 20 days (indicative)",
      "hit rate 0.466 \u00b7 70,185 bets",
      "mean half spread 2.74 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 1.266,
     "kv": [
      "daily t 19.8 over 20 days (indicative)",
      "hit rate 0.502 \u00b7 70,185 bets",
      "mean half spread 3.39 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    }
   ]
  },
  "pnl:512:B:x": {
   "bench": "pnl",
   "h": 512,
   "variant": "B",
   "sizing": "x",
   "label": "PnL B, bps per bet, 512 messages, equal $1 bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": -2.343,
     "kv": [
      "daily t -53.5 over 20 days (indicative)",
      "hit rate 0.328 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": -1.878,
     "kv": [
      "daily t -41.5 over 20 days (indicative)",
      "hit rate 0.358 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    },
    {
     "name": "last-trade rule",
     "value": -2.023
    },
    {
     "name": "book imbalance",
     "value": -2.322
    }
   ]
  },
  "pnl:512:B:y": {
   "bench": "pnl",
   "h": 512,
   "variant": "B",
   "sizing": "y",
   "label": "PnL B, bps per bet, 512 messages, volatility-scaled bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": -2.435,
     "kv": [
      "daily t -40.9 over 20 days (indicative)",
      "hit rate 0.328 \u00b7 70,185 bets",
      "mean half spread 2.74 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": -2.127,
     "kv": [
      "daily t -30.9 over 20 days (indicative)",
      "hit rate 0.358 \u00b7 70,185 bets",
      "mean half spread 3.39 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    }
   ]
  },
  "return:1024:pearson": {
   "bench": "return",
   "h": 1024,
   "metric": "pearson",
   "label": "pooled Pearson, 1024 messages ahead",
   "better": "higher",
   "unit": "",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.0145,
     "kv": [
      "70,185 decisions",
      "Pearson 0.015 \u00b7 direction 0.504",
      "10 bp weighted Pearson 0.027"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.0992,
     "kv": [
      "70,185 decisions",
      "Pearson 0.099 \u00b7 direction 0.528",
      "10 bp weighted Pearson 0.155"
     ]
    }
   ],
   "baselines": [
    {
     "name": "last-trade rule",
     "value": 0.0437
    },
    {
     "name": "book imbalance",
     "value": 0.0155
    },
    {
     "name": "random direction",
     "value": 0.0089
    }
   ]
  },
  "return:1024:direction_acc": {
   "bench": "return",
   "h": 1024,
   "metric": "direction_acc",
   "label": "direction accuracy, 1024 messages ahead",
   "better": "higher",
   "unit": "",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.5036,
     "kv": [
      "70,185 decisions",
      "Pearson 0.015 \u00b7 direction 0.504",
      "10 bp weighted Pearson 0.027"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.5282,
     "kv": [
      "70,185 decisions",
      "Pearson 0.099 \u00b7 direction 0.528",
      "10 bp weighted Pearson 0.155"
     ]
    }
   ],
   "baselines": [
    {
     "name": "last-trade rule",
     "value": 0.5216
    },
    {
     "name": "book imbalance",
     "value": 0.5125
    },
    {
     "name": "random direction",
     "value": 0.5031
    }
   ]
  },
  "pnl:1024:A:x": {
   "bench": "pnl",
   "h": 1024,
   "variant": "A",
   "sizing": "x",
   "label": "PnL A, bps per bet, 1024 messages, equal $1 bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.11,
     "kv": [
      "daily t 2.0 over 20 days (indicative)",
      "hit rate 0.474 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 0.628,
     "kv": [
      "daily t 11.8 over 20 days (indicative)",
      "hit rate 0.498 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    },
    {
     "name": "last-trade rule",
     "value": 0.493
    },
    {
     "name": "book imbalance",
     "value": 0.125
    }
   ]
  },
  "pnl:1024:A:y": {
   "bench": "pnl",
   "h": 1024,
   "variant": "A",
   "sizing": "y",
   "label": "PnL A, bps per bet, 1024 messages, volatility-scaled bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.222,
     "kv": [
      "daily t 2.2 over 20 days (indicative)",
      "hit rate 0.474 \u00b7 70,185 bets",
      "mean half spread 2.88 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": 1.327,
     "kv": [
      "daily t 11.5 over 20 days (indicative)",
      "hit rate 0.498 \u00b7 70,185 bets",
      "mean half spread 3.49 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    }
   ]
  },
  "pnl:1024:B:x": {
   "bench": "pnl",
   "h": 1024,
   "variant": "B",
   "sizing": "x",
   "label": "PnL B, bps per bet, 1024 messages, equal $1 bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": -2.381,
     "kv": [
      "daily t -37.7 over 20 days (indicative)",
      "hit rate 0.369 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": -1.863,
     "kv": [
      "daily t -31.3 over 20 days (indicative)",
      "hit rate 0.389 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    },
    {
     "name": "last-trade rule",
     "value": -1.998
    },
    {
     "name": "book imbalance",
     "value": -2.341
    }
   ]
  },
  "pnl:1024:B:y": {
   "bench": "pnl",
   "h": 1024,
   "variant": "B",
   "sizing": "y",
   "label": "PnL B, bps per bet, 1024 messages, volatility-scaled bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": -2.654,
     "kv": [
      "daily t -23.5 over 20 days (indicative)",
      "hit rate 0.369 \u00b7 70,185 bets",
      "mean half spread 2.88 bps"
     ]
    },
    {
     "t": "2026-10-15T12:43:25Z",
     "model": "baseline r4 \u00b7 end-to-end fine-tune",
     "value": -2.162,
     "kv": [
      "daily t -17.7 over 20 days (indicative)",
      "hit rate 0.389 \u00b7 70,185 bets",
      "mean half spread 3.49 bps"
     ]
    }
   ],
   "baselines": [
    {
     "name": "no trading",
     "value": 0.0
    }
   ]
  },
  "lob:feature_marginal": {
   "bench": "lob",
   "method": "feature_marginal",
   "desc": "Pooled real vs generated distribution per feature, normalised Wasserstein, mean over 21 features.",
   "label": "LOB-Bench feature_marginal",
   "better": "lower",
   "unit": "",
   "entries": [],
   "baselines": []
  },
  "lob:context_paired": {
   "bench": "lob",
   "method": "context_paired",
   "desc": "Each history's generated continuation vs its own observed future, averaged over histories.",
   "label": "LOB-Bench context_paired",
   "better": "lower",
   "unit": "",
   "entries": [],
   "baselines": []
  },
  "lob:feature_conditional": {
   "bench": "lob",
   "method": "feature_conditional",
   "desc": "Target feature vs conditioning feature within shared bins, count-weighted Wasserstein; reported with coverage.",
   "label": "LOB-Bench feature_conditional",
   "better": "lower",
   "unit": "",
   "entries": [],
   "baselines": []
  },
  "lob:context_binned": {
   "bench": "lob",
   "method": "context_binned",
   "desc": "Bins from historical spread; real and generated continuations grouped by their own spread.",
   "label": "LOB-Bench context_binned",
   "better": "lower",
   "unit": "",
   "entries": [],
   "baselines": []
  },
  "lob:time_lagged": {
   "bench": "lob",
   "method": "time_lagged",
   "desc": "Later target paired with an earlier condition at lag 500.",
   "label": "LOB-Bench time_lagged",
   "better": "lower",
   "unit": "",
   "entries": [],
   "baselines": []
  },
  "lob:temporal_divergence": {
   "bench": "lob",
   "method": "temporal_divergence",
   "desc": "Successive 100-event windows of the generated continuation vs the pooled real distribution.",
   "label": "LOB-Bench temporal_divergence",
   "better": "lower",
   "unit": "",
   "entries": [],
   "baselines": []
  }
 },
 "lob_methods": [
  "feature_marginal",
  "context_paired",
  "feature_conditional",
  "context_binned",
  "time_lagged",
  "temporal_divergence"
 ],
 "lob_default": "feature_conditional"
};
