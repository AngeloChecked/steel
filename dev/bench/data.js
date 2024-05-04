window.BENCHMARK_DATA = {
  "lastUpdate": 1714783386520,
  "repoUrl": "https://github.com/AngeloChecked/steel",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Glenn McDonald",
            "username": "glenn-m",
            "email": "2371316+glenn-m@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fb349fcffce4285a48ce4f692971238beb2b96af",
          "message": "Fetch version from cargo for repl startup msg (#197)",
          "timestamp": "2024-05-03T03:45:26Z",
          "url": "https://github.com/AngeloChecked/steel/commit/fb349fcffce4285a48ce4f692971238beb2b96af"
        },
        "date": 1714783385446,
        "tool": "cargo",
        "benches": [
          {
            "name": "range-big",
            "value": 110504,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "map-big",
            "value": 594145,
            "range": "± 752",
            "unit": "ns/iter"
          },
          {
            "name": "transducer-map",
            "value": 1447379,
            "range": "± 13845",
            "unit": "ns/iter"
          },
          {
            "name": "filter-big",
            "value": 486790,
            "range": "± 770",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations",
            "value": 831535,
            "range": "± 1508",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations-letrec",
            "value": 1597079,
            "range": "± 21753",
            "unit": "ns/iter"
          },
          {
            "name": "trie-sort-without-optimizations",
            "value": 24667,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "fib-28/fib-28",
            "value": 39524470,
            "range": "± 324035",
            "unit": "ns/iter"
          },
          {
            "name": "thread-creation/thread-creation",
            "value": 873977,
            "range": "± 13818",
            "unit": "ns/iter"
          },
          {
            "name": "engine-creation",
            "value": 29426218,
            "range": "± 975533",
            "unit": "ns/iter"
          },
          {
            "name": "register-fn",
            "value": 186,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "multiple-transducers",
            "value": 8467,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "ackermann-3-3",
            "value": 258535,
            "range": "± 21166",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}