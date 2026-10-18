window.NS_DATA = {
 "snapshot": "2026-10-18T17:43:58Z",
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
   "end": "2026-10-15T18:51:51Z",
   "status": "finished",
   "note": null,
   "budget_h": 10.0,
   "no_book": true,
   "params_m": 24.19,
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
    },
    {
     "t": "2026-10-15T17:51:42Z",
     "hours": 9.0,
     "step": 14409,
     "tokens_b": 37.24,
     "val": 11.245,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-15T18:51:51Z",
     "hours": 10.0,
     "step": 14704,
     "tokens_b": 39.75,
     "val": 11.213,
     "test": 11.934,
     "final": true
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
   "end": "2026-10-15T19:07:52Z",
   "status": "finished",
   "note": null,
   "budget_h": 10.0,
   "no_book": false,
   "params_m": 39.13,
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
    },
    {
     "t": "2026-10-15T18:07:51Z",
     "hours": 9.0,
     "step": 10504,
     "tokens_b": 31.05,
     "val": 11.605,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-15T19:07:52Z",
     "hours": 10.0,
     "step": 10800,
     "tokens_b": 33.57,
     "val": 11.637,
     "test": 12.377,
     "final": true
    }
   ]
  },
  {
   "name": "new tokens (a)",
   "kind": "scenario",
   "desc": "Scenario (a): new message tokenization, same budget as the baseline.",
   "start": "2026-10-15T09:11:59Z",
   "end": "2026-10-15T19:11:59Z",
   "status": "finished",
   "note": null,
   "budget_h": 10.0,
   "no_book": false,
   "params_m": 29.26,
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
    },
    {
     "t": "2026-10-15T18:12:01Z",
     "hours": 9.0,
     "step": 25031,
     "tokens_b": 44.26,
     "val": 10.265,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-15T19:11:59Z",
     "hours": 10.0,
     "step": 25612,
     "tokens_b": 47.5,
     "val": 10.242,
     "test": 10.946,
     "final": true
    }
   ]
  },
  {
   "name": "level-total book state (A)",
   "kind": "scenario",
   "desc": "Same as Q, but each price level gives only its total size, not the individual orders. Same budget.",
   "start": "2026-10-16T08:28:05Z",
   "end": "2026-10-16T18:28:11Z",
   "status": "finished",
   "note": null,
   "budget_h": 10.0,
   "no_book": false,
   "params_m": 39.54,
   "points": [
    {
     "t": "2026-10-16T14:28:11Z",
     "hours": 6.0,
     "step": 17846,
     "tokens_b": 31.11,
     "val": 10.686,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-16T15:28:11Z",
     "hours": 7.0,
     "step": 18363,
     "tokens_b": 34.33,
     "val": 10.587,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-16T16:28:05Z",
     "hours": 8.0,
     "step": 18880,
     "tokens_b": 37.55,
     "val": 10.521,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-16T17:28:06Z",
     "hours": 9.0,
     "step": 19399,
     "tokens_b": 40.78,
     "val": 10.491,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-16T18:28:11Z",
     "hours": 10.0,
     "step": 19918,
     "tokens_b": 44.01,
     "val": 10.459,
     "test": 11.184,
     "final": true
    }
   ]
  },
  {
   "name": "no book state (N)",
   "kind": "ablation",
   "desc": "Same model as Q with no book state: messages only. Same budget.",
   "start": "2026-10-16T08:28:05Z",
   "end": "2026-10-16T18:28:11Z",
   "status": "finished",
   "note": null,
   "budget_h": 10.0,
   "no_book": false,
   "params_m": 27.37,
   "points": [
    {
     "t": "2026-10-16T14:28:09Z",
     "hours": 6.0,
     "step": 20644,
     "tokens_b": 34.42,
     "val": 10.537,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-16T15:28:06Z",
     "hours": 7.0,
     "step": 21181,
     "tokens_b": 37.76,
     "val": 10.457,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-16T16:28:05Z",
     "hours": 8.0,
     "step": 21719,
     "tokens_b": 41.11,
     "val": 10.406,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-16T17:28:10Z",
     "hours": 9.0,
     "step": 22258,
     "tokens_b": 44.47,
     "val": 10.367,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-16T18:28:11Z",
     "hours": 10.0,
     "step": 22796,
     "tokens_b": 47.82,
     "val": 10.344,
     "test": 11.061,
     "final": true
    }
   ]
  },
  {
   "name": "full book state (Q)",
   "kind": "scenario",
   "desc": "Scenario (a) tokens plus the full order-book state once per window: every price level and every resting order in queue order. Same budget.",
   "start": "2026-10-16T08:28:06Z",
   "end": "2026-10-16T18:28:08Z",
   "status": "finished",
   "note": null,
   "budget_h": 10.0,
   "no_book": false,
   "params_m": 39.54,
   "points": [
    {
     "t": "2026-10-16T14:28:06Z",
     "hours": 6.0,
     "step": 18238,
     "tokens_b": 31.37,
     "val": 10.469,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-16T15:28:06Z",
     "hours": 7.0,
     "step": 18754,
     "tokens_b": 34.58,
     "val": 10.405,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-16T16:28:09Z",
     "hours": 8.0,
     "step": 19271,
     "tokens_b": 37.8,
     "val": 10.355,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-16T17:28:07Z",
     "hours": 9.0,
     "step": 19787,
     "tokens_b": 41.01,
     "val": 10.319,
     "test": null,
     "final": false
    },
    {
     "t": "2026-10-16T18:28:08Z",
     "hours": 10.0,
     "step": 20303,
     "tokens_b": 44.22,
     "val": 10.302,
     "test": 11.02,
     "final": true
    }
   ]
  }
 ],
 "scores": {
  "return:16:pearson": {
   "bench": "return",
   "h": 16,
   "metric": "pearson",
   "label": "pooled Pearson, 16 messages ahead",
   "better": "higher",
   "unit": "",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.1078,
     "kv": [
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "70,185 decisions",
      "Pearson 0.291 \u00b7 direction 0.685",
      "10 bp weighted Pearson 0.271"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.3065,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "70,185 decisions",
      "Pearson 0.306 \u00b7 direction 0.677",
      "10 bp weighted Pearson 0.268"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.3109,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "70,185 decisions",
      "Pearson 0.311 \u00b7 direction 0.694",
      "10 bp weighted Pearson 0.237"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.2941,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "70,183 decisions",
      "Pearson 0.294 \u00b7 direction 0.674",
      "10 bp weighted Pearson 0.248"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.3893,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "70,183 decisions",
      "Pearson 0.389 \u00b7 direction 0.715",
      "10 bp weighted Pearson 0.377"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.387,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "70,183 decisions",
      "Pearson 0.387 \u00b7 direction 0.714",
      "10 bp weighted Pearson 0.364"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.3374,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.337 \u00b7 direction 0.690",
      "10 bp weighted Pearson 0.462"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.3412,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.341 \u00b7 direction 0.687",
      "10 bp weighted Pearson 0.459"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.348,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.348 \u00b7 direction 0.691",
      "10 bp weighted Pearson 0.496"
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
  "return:16:direction_acc": {
   "bench": "return",
   "h": 16,
   "metric": "direction_acc",
   "label": "direction accuracy, 16 messages ahead",
   "better": "higher",
   "unit": "",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.5994,
     "kv": [
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "70,185 decisions",
      "Pearson 0.291 \u00b7 direction 0.685",
      "10 bp weighted Pearson 0.271"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.6775,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "70,185 decisions",
      "Pearson 0.306 \u00b7 direction 0.677",
      "10 bp weighted Pearson 0.268"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.6939,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "70,185 decisions",
      "Pearson 0.311 \u00b7 direction 0.694",
      "10 bp weighted Pearson 0.237"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.6736,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "70,183 decisions",
      "Pearson 0.294 \u00b7 direction 0.674",
      "10 bp weighted Pearson 0.248"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.715,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "70,183 decisions",
      "Pearson 0.389 \u00b7 direction 0.715",
      "10 bp weighted Pearson 0.377"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.7138,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "70,183 decisions",
      "Pearson 0.387 \u00b7 direction 0.714",
      "10 bp weighted Pearson 0.364"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.6897,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.337 \u00b7 direction 0.690",
      "10 bp weighted Pearson 0.462"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.6867,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.341 \u00b7 direction 0.687",
      "10 bp weighted Pearson 0.459"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.6907,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.348 \u00b7 direction 0.691",
      "10 bp weighted Pearson 0.496"
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
  "pnl:16:A:x": {
   "bench": "pnl",
   "h": 16,
   "variant": "A",
   "sizing": "x",
   "label": "PnL A, bps per bet, 16 messages, equal $1 bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.081,
     "kv": [
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t 29.5 over 20 days (indicative)",
      "hit rate 0.203 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.157,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t 33.9 over 20 days (indicative)",
      "hit rate 0.200 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.168,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t 33.5 over 20 days (indicative)",
      "hit rate 0.205 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.211,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t 35.6 over 20 days (indicative)",
      "hit rate 0.265 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.282,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t 45.5 over 20 days (indicative)",
      "hit rate 0.281 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.275,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t 41.9 over 20 days (indicative)",
      "hit rate 0.281 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.26,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t 39.5 over 20 days (indicative)",
      "hit rate 0.272 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.256,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t 38.9 over 20 days (indicative)",
      "hit rate 0.270 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.259,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t 36.0 over 20 days (indicative)",
      "hit rate 0.272 \u00b7 70,183 bets",
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
  "pnl:16:A:y": {
   "bench": "pnl",
   "h": 16,
   "variant": "A",
   "sizing": "y",
   "label": "PnL A, bps per bet, 16 messages, volatility-scaled bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": 0.168,
     "kv": [
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t 25.3 over 20 days (indicative)",
      "hit rate 0.203 \u00b7 70,185 bets",
      "mean half spread 3.20 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.627,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t 26.0 over 20 days (indicative)",
      "hit rate 0.200 \u00b7 70,185 bets",
      "mean half spread 3.43 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.666,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t 22.8 over 20 days (indicative)",
      "hit rate 0.205 \u00b7 70,185 bets",
      "mean half spread 3.56 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.657,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t 22.8 over 20 days (indicative)",
      "hit rate 0.265 \u00b7 70,183 bets",
      "mean half spread 3.55 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.862,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t 33.0 over 20 days (indicative)",
      "hit rate 0.281 \u00b7 70,183 bets",
      "mean half spread 3.66 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.854,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t 30.4 over 20 days (indicative)",
      "hit rate 0.281 \u00b7 70,183 bets",
      "mean half spread 3.61 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.639,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t 37.2 over 20 days (indicative)",
      "hit rate 0.272 \u00b7 70,183 bets",
      "mean half spread 3.26 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.653,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t 36.9 over 20 days (indicative)",
      "hit rate 0.270 \u00b7 70,183 bets",
      "mean half spread 3.29 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.675,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t 33.2 over 20 days (indicative)",
      "hit rate 0.272 \u00b7 70,183 bets",
      "mean half spread 3.27 bps"
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
  "pnl:16:B:x": {
   "bench": "pnl",
   "h": 16,
   "variant": "B",
   "sizing": "x",
   "label": "PnL B, bps per bet, 16 messages, equal $1 bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": -2.41,
     "kv": [
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t -72.0 over 20 days (indicative)",
      "hit rate 0.025 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": -2.334,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t -73.3 over 20 days (indicative)",
      "hit rate 0.024 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": -2.323,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t -71.7 over 20 days (indicative)",
      "hit rate 0.025 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": -2.279,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t -73.5 over 20 days (indicative)",
      "hit rate 0.041 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": -2.209,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t -70.6 over 20 days (indicative)",
      "hit rate 0.045 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": -2.216,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t -71.0 over 20 days (indicative)",
      "hit rate 0.044 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": -2.231,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t -75.4 over 20 days (indicative)",
      "hit rate 0.043 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": -2.235,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t -73.9 over 20 days (indicative)",
      "hit rate 0.042 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": -2.232,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t -73.8 over 20 days (indicative)",
      "hit rate 0.043 \u00b7 70,183 bets",
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
  "pnl:16:B:y": {
   "bench": "pnl",
   "h": 16,
   "variant": "B",
   "sizing": "y",
   "label": "PnL B, bps per bet, 16 messages, volatility-scaled bets",
   "better": "higher",
   "unit": "bps",
   "entries": [
    {
     "t": "2026-10-14T11:45:53Z",
     "model": "baseline r4 \u00b7 frozen backbone + linear head",
     "value": -2.307,
     "kv": [
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t -48.3 over 20 days (indicative)",
      "hit rate 0.025 \u00b7 70,185 bets",
      "mean half spread 3.20 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": -2.806,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t -48.9 over 20 days (indicative)",
      "hit rate 0.024 \u00b7 70,185 bets",
      "mean half spread 3.43 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": -2.896,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t -44.3 over 20 days (indicative)",
      "hit rate 0.025 \u00b7 70,185 bets",
      "mean half spread 3.56 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": -2.894,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t -52.4 over 20 days (indicative)",
      "hit rate 0.041 \u00b7 70,183 bets",
      "mean half spread 3.55 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": -2.802,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t -49.3 over 20 days (indicative)",
      "hit rate 0.045 \u00b7 70,183 bets",
      "mean half spread 3.66 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": -2.758,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t -50.8 over 20 days (indicative)",
      "hit rate 0.044 \u00b7 70,183 bets",
      "mean half spread 3.61 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": -2.619,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t -64.0 over 20 days (indicative)",
      "hit rate 0.043 \u00b7 70,183 bets",
      "mean half spread 3.26 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": -2.64,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t -64.0 over 20 days (indicative)",
      "hit rate 0.042 \u00b7 70,183 bets",
      "mean half spread 3.29 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": -2.59,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t -59.5 over 20 days (indicative)",
      "hit rate 0.043 \u00b7 70,183 bets",
      "mean half spread 3.27 bps"
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "70,185 decisions",
      "Pearson 0.258 \u00b7 direction 0.615",
      "10 bp weighted Pearson 0.368"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.2741,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "70,185 decisions",
      "Pearson 0.274 \u00b7 direction 0.631",
      "10 bp weighted Pearson 0.354"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.2779,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "70,185 decisions",
      "Pearson 0.278 \u00b7 direction 0.622",
      "10 bp weighted Pearson 0.354"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.2601,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "70,183 decisions",
      "Pearson 0.260 \u00b7 direction 0.613",
      "10 bp weighted Pearson 0.362"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.3374,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "70,183 decisions",
      "Pearson 0.337 \u00b7 direction 0.627",
      "10 bp weighted Pearson 0.477"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.3378,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "70,183 decisions",
      "Pearson 0.338 \u00b7 direction 0.630",
      "10 bp weighted Pearson 0.453"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.2988,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.299 \u00b7 direction 0.629",
      "10 bp weighted Pearson 0.395"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.3017,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.302 \u00b7 direction 0.625",
      "10 bp weighted Pearson 0.428"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.3067,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.307 \u00b7 direction 0.627",
      "10 bp weighted Pearson 0.400"
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "70,185 decisions",
      "Pearson 0.258 \u00b7 direction 0.615",
      "10 bp weighted Pearson 0.368"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.631,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "70,185 decisions",
      "Pearson 0.274 \u00b7 direction 0.631",
      "10 bp weighted Pearson 0.354"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.6222,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "70,185 decisions",
      "Pearson 0.278 \u00b7 direction 0.622",
      "10 bp weighted Pearson 0.354"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.6132,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "70,183 decisions",
      "Pearson 0.260 \u00b7 direction 0.613",
      "10 bp weighted Pearson 0.362"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.6271,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "70,183 decisions",
      "Pearson 0.337 \u00b7 direction 0.627",
      "10 bp weighted Pearson 0.477"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.6302,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "70,183 decisions",
      "Pearson 0.338 \u00b7 direction 0.630",
      "10 bp weighted Pearson 0.453"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.6288,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.299 \u00b7 direction 0.629",
      "10 bp weighted Pearson 0.395"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.6252,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.302 \u00b7 direction 0.625",
      "10 bp weighted Pearson 0.428"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.6271,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.307 \u00b7 direction 0.627",
      "10 bp weighted Pearson 0.400"
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t 35.4 over 20 days (indicative)",
      "hit rate 0.409 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.365,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t 33.0 over 20 days (indicative)",
      "hit rate 0.420 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.362,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t 33.0 over 20 days (indicative)",
      "hit rate 0.414 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.397,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t 43.9 over 20 days (indicative)",
      "hit rate 0.441 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.494,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t 47.3 over 20 days (indicative)",
      "hit rate 0.451 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.493,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t 49.9 over 20 days (indicative)",
      "hit rate 0.453 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.474,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t 44.0 over 20 days (indicative)",
      "hit rate 0.452 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.466,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t 39.0 over 20 days (indicative)",
      "hit rate 0.449 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.474,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t 42.1 over 20 days (indicative)",
      "hit rate 0.451 \u00b7 70,183 bets",
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t 33.6 over 20 days (indicative)",
      "hit rate 0.409 \u00b7 70,185 bets",
      "mean half spread 3.22 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.898,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t 32.2 over 20 days (indicative)",
      "hit rate 0.420 \u00b7 70,185 bets",
      "mean half spread 3.54 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.902,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t 32.2 over 20 days (indicative)",
      "hit rate 0.414 \u00b7 70,185 bets",
      "mean half spread 3.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.923,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t 36.9 over 20 days (indicative)",
      "hit rate 0.441 \u00b7 70,183 bets",
      "mean half spread 3.59 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 1.201,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t 36.9 over 20 days (indicative)",
      "hit rate 0.451 \u00b7 70,183 bets",
      "mean half spread 3.93 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 1.196,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t 36.9 over 20 days (indicative)",
      "hit rate 0.453 \u00b7 70,183 bets",
      "mean half spread 3.82 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 1.003,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t 37.5 over 20 days (indicative)",
      "hit rate 0.452 \u00b7 70,183 bets",
      "mean half spread 3.30 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 1.004,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t 38.2 over 20 days (indicative)",
      "hit rate 0.449 \u00b7 70,183 bets",
      "mean half spread 3.35 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 1.052,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t 32.9 over 20 days (indicative)",
      "hit rate 0.451 \u00b7 70,183 bets",
      "mean half spread 3.41 bps"
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t -73.1 over 20 days (indicative)",
      "hit rate 0.125 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": -2.126,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t -62.6 over 20 days (indicative)",
      "hit rate 0.126 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": -2.129,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t -64.1 over 20 days (indicative)",
      "hit rate 0.125 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": -2.093,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t -63.0 over 20 days (indicative)",
      "hit rate 0.152 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": -1.997,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t -65.4 over 20 days (indicative)",
      "hit rate 0.159 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": -1.998,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t -67.2 over 20 days (indicative)",
      "hit rate 0.160 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": -2.017,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t -64.5 over 20 days (indicative)",
      "hit rate 0.161 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": -2.025,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t -64.9 over 20 days (indicative)",
      "hit rate 0.159 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": -2.017,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t -61.2 over 20 days (indicative)",
      "hit rate 0.160 \u00b7 70,183 bets",
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t -50.8 over 20 days (indicative)",
      "hit rate 0.125 \u00b7 70,185 bets",
      "mean half spread 3.22 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": -2.638,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t -46.4 over 20 days (indicative)",
      "hit rate 0.126 \u00b7 70,185 bets",
      "mean half spread 3.54 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": -2.591,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t -44.9 over 20 days (indicative)",
      "hit rate 0.125 \u00b7 70,185 bets",
      "mean half spread 3.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": -2.663,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t -42.8 over 20 days (indicative)",
      "hit rate 0.152 \u00b7 70,183 bets",
      "mean half spread 3.59 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": -2.726,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t -34.0 over 20 days (indicative)",
      "hit rate 0.159 \u00b7 70,183 bets",
      "mean half spread 3.93 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": -2.626,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t -39.4 over 20 days (indicative)",
      "hit rate 0.160 \u00b7 70,183 bets",
      "mean half spread 3.82 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": -2.301,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t -41.3 over 20 days (indicative)",
      "hit rate 0.161 \u00b7 70,183 bets",
      "mean half spread 3.30 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": -2.348,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t -43.0 over 20 days (indicative)",
      "hit rate 0.159 \u00b7 70,183 bets",
      "mean half spread 3.35 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": -2.36,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t -40.7 over 20 days (indicative)",
      "hit rate 0.160 \u00b7 70,183 bets",
      "mean half spread 3.41 bps"
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "70,185 decisions",
      "Pearson 0.203 \u00b7 direction 0.581",
      "10 bp weighted Pearson 0.263"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.2373,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "70,185 decisions",
      "Pearson 0.237 \u00b7 direction 0.595",
      "10 bp weighted Pearson 0.315"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.2359,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "70,185 decisions",
      "Pearson 0.236 \u00b7 direction 0.592",
      "10 bp weighted Pearson 0.317"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.229,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "70,183 decisions",
      "Pearson 0.229 \u00b7 direction 0.589",
      "10 bp weighted Pearson 0.329"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.2979,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "70,183 decisions",
      "Pearson 0.298 \u00b7 direction 0.602",
      "10 bp weighted Pearson 0.437"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.298,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "70,183 decisions",
      "Pearson 0.298 \u00b7 direction 0.606",
      "10 bp weighted Pearson 0.438"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.2604,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.260 \u00b7 direction 0.600",
      "10 bp weighted Pearson 0.370"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.2629,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.263 \u00b7 direction 0.599",
      "10 bp weighted Pearson 0.385"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.2684,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.268 \u00b7 direction 0.602",
      "10 bp weighted Pearson 0.389"
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "70,185 decisions",
      "Pearson 0.203 \u00b7 direction 0.581",
      "10 bp weighted Pearson 0.263"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.5955,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "70,185 decisions",
      "Pearson 0.237 \u00b7 direction 0.595",
      "10 bp weighted Pearson 0.315"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.5924,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "70,185 decisions",
      "Pearson 0.236 \u00b7 direction 0.592",
      "10 bp weighted Pearson 0.317"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.5893,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "70,183 decisions",
      "Pearson 0.229 \u00b7 direction 0.589",
      "10 bp weighted Pearson 0.329"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.6023,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "70,183 decisions",
      "Pearson 0.298 \u00b7 direction 0.602",
      "10 bp weighted Pearson 0.437"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.6055,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "70,183 decisions",
      "Pearson 0.298 \u00b7 direction 0.606",
      "10 bp weighted Pearson 0.438"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.6004,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.260 \u00b7 direction 0.600",
      "10 bp weighted Pearson 0.370"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.5992,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.263 \u00b7 direction 0.599",
      "10 bp weighted Pearson 0.385"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.6017,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.268 \u00b7 direction 0.602",
      "10 bp weighted Pearson 0.389"
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t 28.6 over 20 days (indicative)",
      "hit rate 0.480 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.519,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t 32.2 over 20 days (indicative)",
      "hit rate 0.492 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.501,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t 35.5 over 20 days (indicative)",
      "hit rate 0.489 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.501,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t 26.6 over 20 days (indicative)",
      "hit rate 0.487 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.612,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t 49.2 over 20 days (indicative)",
      "hit rate 0.497 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.611,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t 45.2 over 20 days (indicative)",
      "hit rate 0.500 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.57,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t 41.9 over 20 days (indicative)",
      "hit rate 0.496 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.568,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t 33.2 over 20 days (indicative)",
      "hit rate 0.495 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.581,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t 33.0 over 20 days (indicative)",
      "hit rate 0.497 \u00b7 70,183 bets",
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t 26.6 over 20 days (indicative)",
      "hit rate 0.480 \u00b7 70,185 bets",
      "mean half spread 3.32 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 1.172,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t 25.1 over 20 days (indicative)",
      "hit rate 0.492 \u00b7 70,185 bets",
      "mean half spread 3.65 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 1.191,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t 25.9 over 20 days (indicative)",
      "hit rate 0.489 \u00b7 70,185 bets",
      "mean half spread 3.61 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 1.123,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t 22.6 over 20 days (indicative)",
      "hit rate 0.487 \u00b7 70,183 bets",
      "mean half spread 3.59 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 1.49,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t 33.9 over 20 days (indicative)",
      "hit rate 0.497 \u00b7 70,183 bets",
      "mean half spread 4.00 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 1.479,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t 30.9 over 20 days (indicative)",
      "hit rate 0.500 \u00b7 70,183 bets",
      "mean half spread 3.91 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 1.217,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t 30.3 over 20 days (indicative)",
      "hit rate 0.496 \u00b7 70,183 bets",
      "mean half spread 3.32 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 1.22,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t 30.8 over 20 days (indicative)",
      "hit rate 0.495 \u00b7 70,183 bets",
      "mean half spread 3.37 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 1.286,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t 26.0 over 20 days (indicative)",
      "hit rate 0.497 \u00b7 70,183 bets",
      "mean half spread 3.45 bps"
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t -62.1 over 20 days (indicative)",
      "hit rate 0.232 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": -1.972,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t -57.8 over 20 days (indicative)",
      "hit rate 0.241 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": -1.989,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t -65.7 over 20 days (indicative)",
      "hit rate 0.239 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": -1.99,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t -56.9 over 20 days (indicative)",
      "hit rate 0.237 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": -1.879,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t -60.5 over 20 days (indicative)",
      "hit rate 0.246 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": -1.879,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t -61.5 over 20 days (indicative)",
      "hit rate 0.247 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": -1.921,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t -55.1 over 20 days (indicative)",
      "hit rate 0.245 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": -1.923,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t -62.2 over 20 days (indicative)",
      "hit rate 0.244 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": -1.91,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t -56.4 over 20 days (indicative)",
      "hit rate 0.246 \u00b7 70,183 bets",
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t -45.3 over 20 days (indicative)",
      "hit rate 0.232 \u00b7 70,185 bets",
      "mean half spread 3.32 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": -2.476,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t -33.4 over 20 days (indicative)",
      "hit rate 0.241 \u00b7 70,185 bets",
      "mean half spread 3.65 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": -2.415,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t -35.4 over 20 days (indicative)",
      "hit rate 0.239 \u00b7 70,185 bets",
      "mean half spread 3.61 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": -2.467,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t -35.4 over 20 days (indicative)",
      "hit rate 0.237 \u00b7 70,183 bets",
      "mean half spread 3.59 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": -2.512,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t -29.7 over 20 days (indicative)",
      "hit rate 0.246 \u00b7 70,183 bets",
      "mean half spread 4.00 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": -2.427,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t -34.4 over 20 days (indicative)",
      "hit rate 0.247 \u00b7 70,183 bets",
      "mean half spread 3.91 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": -2.099,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t -33.9 over 20 days (indicative)",
      "hit rate 0.245 \u00b7 70,183 bets",
      "mean half spread 3.32 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": -2.148,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t -38.1 over 20 days (indicative)",
      "hit rate 0.244 \u00b7 70,183 bets",
      "mean half spread 3.37 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": -2.165,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t -32.7 over 20 days (indicative)",
      "hit rate 0.246 \u00b7 70,183 bets",
      "mean half spread 3.45 bps"
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "70,185 decisions",
      "Pearson 0.136 \u00b7 direction 0.548",
      "10 bp weighted Pearson 0.194"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.1508,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "70,185 decisions",
      "Pearson 0.151 \u00b7 direction 0.547",
      "10 bp weighted Pearson 0.212"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.1423,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "70,185 decisions",
      "Pearson 0.142 \u00b7 direction 0.547",
      "10 bp weighted Pearson 0.206"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.1344,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "70,183 decisions",
      "Pearson 0.134 \u00b7 direction 0.544",
      "10 bp weighted Pearson 0.195"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.1755,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "70,183 decisions",
      "Pearson 0.175 \u00b7 direction 0.554",
      "10 bp weighted Pearson 0.236"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.1783,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "70,183 decisions",
      "Pearson 0.178 \u00b7 direction 0.556",
      "10 bp weighted Pearson 0.250"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.1547,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.155 \u00b7 direction 0.554",
      "10 bp weighted Pearson 0.213"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.1558,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.156 \u00b7 direction 0.555",
      "10 bp weighted Pearson 0.209"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.1577,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.158 \u00b7 direction 0.553",
      "10 bp weighted Pearson 0.209"
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "70,185 decisions",
      "Pearson 0.136 \u00b7 direction 0.548",
      "10 bp weighted Pearson 0.194"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.547,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "70,185 decisions",
      "Pearson 0.151 \u00b7 direction 0.547",
      "10 bp weighted Pearson 0.212"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.5471,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "70,185 decisions",
      "Pearson 0.142 \u00b7 direction 0.547",
      "10 bp weighted Pearson 0.206"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.544,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "70,183 decisions",
      "Pearson 0.134 \u00b7 direction 0.544",
      "10 bp weighted Pearson 0.195"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.5536,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "70,183 decisions",
      "Pearson 0.175 \u00b7 direction 0.554",
      "10 bp weighted Pearson 0.236"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.5556,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "70,183 decisions",
      "Pearson 0.178 \u00b7 direction 0.556",
      "10 bp weighted Pearson 0.250"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.5543,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.155 \u00b7 direction 0.554",
      "10 bp weighted Pearson 0.213"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.5547,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.156 \u00b7 direction 0.555",
      "10 bp weighted Pearson 0.209"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.5529,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.158 \u00b7 direction 0.553",
      "10 bp weighted Pearson 0.209"
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t 16.9 over 20 days (indicative)",
      "hit rate 0.502 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.655,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t 25.0 over 20 days (indicative)",
      "hit rate 0.501 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.598,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t 23.0 over 20 days (indicative)",
      "hit rate 0.501 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.585,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t 27.1 over 20 days (indicative)",
      "hit rate 0.499 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.736,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t 42.2 over 20 days (indicative)",
      "hit rate 0.508 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.732,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t 30.9 over 20 days (indicative)",
      "hit rate 0.510 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.698,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t 26.1 over 20 days (indicative)",
      "hit rate 0.509 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.68,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t 25.3 over 20 days (indicative)",
      "hit rate 0.509 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.69,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t 29.1 over 20 days (indicative)",
      "hit rate 0.507 \u00b7 70,183 bets",
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t 19.8 over 20 days (indicative)",
      "hit rate 0.502 \u00b7 70,185 bets",
      "mean half spread 3.39 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 1.504,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t 18.2 over 20 days (indicative)",
      "hit rate 0.501 \u00b7 70,185 bets",
      "mean half spread 3.72 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 1.452,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t 19.0 over 20 days (indicative)",
      "hit rate 0.501 \u00b7 70,185 bets",
      "mean half spread 3.64 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 1.42,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t 23.2 over 20 days (indicative)",
      "hit rate 0.499 \u00b7 70,183 bets",
      "mean half spread 3.63 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 1.849,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t 31.2 over 20 days (indicative)",
      "hit rate 0.508 \u00b7 70,183 bets",
      "mean half spread 3.99 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 1.835,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t 30.1 over 20 days (indicative)",
      "hit rate 0.510 \u00b7 70,183 bets",
      "mean half spread 3.87 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 1.479,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t 26.1 over 20 days (indicative)",
      "hit rate 0.509 \u00b7 70,183 bets",
      "mean half spread 3.28 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 1.513,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t 27.9 over 20 days (indicative)",
      "hit rate 0.509 \u00b7 70,183 bets",
      "mean half spread 3.37 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 1.545,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t 25.7 over 20 days (indicative)",
      "hit rate 0.507 \u00b7 70,183 bets",
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t -41.5 over 20 days (indicative)",
      "hit rate 0.358 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": -1.835,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t -44.2 over 20 days (indicative)",
      "hit rate 0.358 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": -1.893,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t -43.8 over 20 days (indicative)",
      "hit rate 0.357 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": -1.905,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t -45.6 over 20 days (indicative)",
      "hit rate 0.356 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": -1.755,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t -48.1 over 20 days (indicative)",
      "hit rate 0.362 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": -1.758,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t -44.2 over 20 days (indicative)",
      "hit rate 0.365 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": -1.793,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t -39.2 over 20 days (indicative)",
      "hit rate 0.364 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": -1.81,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t -41.5 over 20 days (indicative)",
      "hit rate 0.364 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": -1.801,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t -41.7 over 20 days (indicative)",
      "hit rate 0.363 \u00b7 70,183 bets",
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t -30.9 over 20 days (indicative)",
      "hit rate 0.358 \u00b7 70,185 bets",
      "mean half spread 3.39 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": -2.219,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t -19.9 over 20 days (indicative)",
      "hit rate 0.358 \u00b7 70,185 bets",
      "mean half spread 3.72 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": -2.185,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t -23.5 over 20 days (indicative)",
      "hit rate 0.357 \u00b7 70,185 bets",
      "mean half spread 3.64 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": -2.21,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t -26.0 over 20 days (indicative)",
      "hit rate 0.356 \u00b7 70,183 bets",
      "mean half spread 3.63 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": -2.145,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t -22.5 over 20 days (indicative)",
      "hit rate 0.362 \u00b7 70,183 bets",
      "mean half spread 3.99 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": -2.036,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t -22.6 over 20 days (indicative)",
      "hit rate 0.365 \u00b7 70,183 bets",
      "mean half spread 3.87 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": -1.802,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t -23.0 over 20 days (indicative)",
      "hit rate 0.364 \u00b7 70,183 bets",
      "mean half spread 3.28 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": -1.852,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t -23.8 over 20 days (indicative)",
      "hit rate 0.364 \u00b7 70,183 bets",
      "mean half spread 3.37 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": -1.843,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t -22.9 over 20 days (indicative)",
      "hit rate 0.363 \u00b7 70,183 bets",
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "70,185 decisions",
      "Pearson 0.099 \u00b7 direction 0.528",
      "10 bp weighted Pearson 0.155"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.1112,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "70,185 decisions",
      "Pearson 0.111 \u00b7 direction 0.528",
      "10 bp weighted Pearson 0.158"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.1032,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "70,185 decisions",
      "Pearson 0.103 \u00b7 direction 0.529",
      "10 bp weighted Pearson 0.153"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.0854,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "70,183 decisions",
      "Pearson 0.085 \u00b7 direction 0.517",
      "10 bp weighted Pearson 0.139"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.1342,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "70,183 decisions",
      "Pearson 0.134 \u00b7 direction 0.530",
      "10 bp weighted Pearson 0.196"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.1346,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "70,183 decisions",
      "Pearson 0.135 \u00b7 direction 0.532",
      "10 bp weighted Pearson 0.202"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.1025,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.103 \u00b7 direction 0.526",
      "10 bp weighted Pearson 0.179"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.1035,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.104 \u00b7 direction 0.528",
      "10 bp weighted Pearson 0.172"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.1054,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.105 \u00b7 direction 0.527",
      "10 bp weighted Pearson 0.180"
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "70,185 decisions",
      "Pearson 0.099 \u00b7 direction 0.528",
      "10 bp weighted Pearson 0.155"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.5277,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "70,185 decisions",
      "Pearson 0.111 \u00b7 direction 0.528",
      "10 bp weighted Pearson 0.158"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.5288,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "70,185 decisions",
      "Pearson 0.103 \u00b7 direction 0.529",
      "10 bp weighted Pearson 0.153"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.5172,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "70,183 decisions",
      "Pearson 0.085 \u00b7 direction 0.517",
      "10 bp weighted Pearson 0.139"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.5296,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "70,183 decisions",
      "Pearson 0.134 \u00b7 direction 0.530",
      "10 bp weighted Pearson 0.196"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.5322,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "70,183 decisions",
      "Pearson 0.135 \u00b7 direction 0.532",
      "10 bp weighted Pearson 0.202"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.526,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.103 \u00b7 direction 0.526",
      "10 bp weighted Pearson 0.179"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.528,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.104 \u00b7 direction 0.528",
      "10 bp weighted Pearson 0.172"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.5268,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "70,183 decisions",
      "Pearson 0.105 \u00b7 direction 0.527",
      "10 bp weighted Pearson 0.180"
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t 11.8 over 20 days (indicative)",
      "hit rate 0.498 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 0.634,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t 17.3 over 20 days (indicative)",
      "hit rate 0.497 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 0.608,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t 15.9 over 20 days (indicative)",
      "hit rate 0.498 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 0.507,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t 11.7 over 20 days (indicative)",
      "hit rate 0.488 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 0.69,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t 18.1 over 20 days (indicative)",
      "hit rate 0.500 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 0.716,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t 17.2 over 20 days (indicative)",
      "hit rate 0.502 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 0.621,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t 20.0 over 20 days (indicative)",
      "hit rate 0.496 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 0.623,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t 14.0 over 20 days (indicative)",
      "hit rate 0.498 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 0.66,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t 13.9 over 20 days (indicative)",
      "hit rate 0.497 \u00b7 70,183 bets",
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t 11.5 over 20 days (indicative)",
      "hit rate 0.498 \u00b7 70,185 bets",
      "mean half spread 3.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": 1.557,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t 11.6 over 20 days (indicative)",
      "hit rate 0.497 \u00b7 70,185 bets",
      "mean half spread 3.71 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": 1.497,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t 13.2 over 20 days (indicative)",
      "hit rate 0.498 \u00b7 70,185 bets",
      "mean half spread 3.60 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": 1.189,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t 13.4 over 20 days (indicative)",
      "hit rate 0.488 \u00b7 70,183 bets",
      "mean half spread 3.45 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": 1.969,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t 19.6 over 20 days (indicative)",
      "hit rate 0.500 \u00b7 70,183 bets",
      "mean half spread 4.01 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": 1.967,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t 16.9 over 20 days (indicative)",
      "hit rate 0.502 \u00b7 70,183 bets",
      "mean half spread 3.89 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": 1.333,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t 17.9 over 20 days (indicative)",
      "hit rate 0.496 \u00b7 70,183 bets",
      "mean half spread 3.14 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": 1.366,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t 16.8 over 20 days (indicative)",
      "hit rate 0.498 \u00b7 70,183 bets",
      "mean half spread 3.23 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": 1.38,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t 14.1 over 20 days (indicative)",
      "hit rate 0.497 \u00b7 70,183 bets",
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t -31.3 over 20 days (indicative)",
      "hit rate 0.389 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": -1.857,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t -35.5 over 20 days (indicative)",
      "hit rate 0.389 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": -1.883,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t -35.9 over 20 days (indicative)",
      "hit rate 0.389 \u00b7 70,185 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": -1.984,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t -32.8 over 20 days (indicative)",
      "hit rate 0.382 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": -1.801,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t -42.4 over 20 days (indicative)",
      "hit rate 0.395 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": -1.775,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t -35.7 over 20 days (indicative)",
      "hit rate 0.396 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": -1.87,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t -37.0 over 20 days (indicative)",
      "hit rate 0.390 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": -1.867,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t -29.1 over 20 days (indicative)",
      "hit rate 0.392 \u00b7 70,183 bets",
      "mean half spread 2.49 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": -1.83,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t -28.6 over 20 days (indicative)",
      "hit rate 0.390 \u00b7 70,183 bets",
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
      "frozen backbone",
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
      "fine-tune 3 h, 1,119 steps",
      "daily t -17.7 over 20 days (indicative)",
      "hit rate 0.389 \u00b7 70,185 bets",
      "mean half spread 3.49 bps"
     ]
    },
    {
     "t": "2026-10-18T02:03:16Z",
     "model": "full book state (Q) \u00b7 end-to-end fine-tune",
     "value": -2.156,
     "kv": [
      "fine-tune 3 h, 2,854 steps",
      "daily t -12.9 over 20 days (indicative)",
      "hit rate 0.389 \u00b7 70,185 bets",
      "mean half spread 3.71 bps"
     ]
    },
    {
     "t": "2026-10-18T02:09:37Z",
     "model": "no book state (N) \u00b7 end-to-end fine-tune",
     "value": -2.099,
     "kv": [
      "fine-tune 3 h, 2,975 steps",
      "daily t -15.2 over 20 days (indicative)",
      "hit rate 0.389 \u00b7 70,185 bets",
      "mean half spread 3.60 bps"
     ]
    },
    {
     "t": "2026-10-18T08:12:38Z",
     "model": "level-total book state (A) \u00b7 end-to-end fine-tune",
     "value": -2.257,
     "kv": [
      "fine-tune 3 h, 2,765 steps",
      "daily t -19.7 over 20 days (indicative)",
      "hit rate 0.382 \u00b7 70,183 bets",
      "mean half spread 3.45 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:01Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 3 h",
     "value": -2.036,
     "kv": [
      "pretrained 1 pass; fine-tune 3 h, 32,221 steps",
      "daily t -18.1 over 20 days (indicative)",
      "hit rate 0.395 \u00b7 70,183 bets",
      "mean half spread 4.01 bps"
     ]
    },
    {
     "t": "2026-10-18T08:01:02Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 3 h",
     "value": -1.928,
     "kv": [
      "pretrained 10 h; fine-tune 3 h, 28,549 steps",
      "daily t -14.5 over 20 days (indicative)",
      "hit rate 0.396 \u00b7 70,183 bets",
      "mean half spread 3.89 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:22Z",
     "model": "one token per message \u00b7 1 pass \u00b7 fine-tune 1,119 steps",
     "value": -1.81,
     "kv": [
      "pretrained 1 pass; fine-tune 1,119 steps (same as r4)",
      "daily t -19.5 over 20 days (indicative)",
      "hit rate 0.390 \u00b7 70,183 bets",
      "mean half spread 3.14 bps"
     ]
    },
    {
     "t": "2026-10-18T08:32:32Z",
     "model": "one token per message \u00b7 10 h \u00b7 fine-tune 1,119 steps",
     "value": -1.86,
     "kv": [
      "pretrained 10 h; fine-tune 1,119 steps (same as r4)",
      "daily t -19.2 over 20 days (indicative)",
      "hit rate 0.392 \u00b7 70,183 bets",
      "mean half spread 3.23 bps"
     ]
    },
    {
     "t": "2026-10-18T14:44:29Z",
     "model": "one token per message \u00b7 13 h \u00b7 fine-tune 1,119 steps",
     "value": -1.835,
     "kv": [
      "pretrained 13 h (end); fine-tune 1,119 steps (same as r4)",
      "daily t -17.3 over 20 days (indicative)",
      "hit rate 0.390 \u00b7 70,183 bets",
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
