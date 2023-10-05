window.BENCHMARK_DATA = {
  "lastUpdate": 1696465693937,
  "repoUrl": "https://github.com/KarishmaGhiya/microsoft-authentication-library-for-js",
  "entries": {
    "msal-node client-credential Regression Test": [
      {
        "commit": {
          "author": {
            "email": "lalima.sharda@gmail.com",
            "name": "Lalima Sharda",
            "username": "lalimasharda"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90629381de88e0bb391c3cb658b9ec2923806993",
          "message": "Bug fix: id token Base64 decoding (#6535)\n\nAddresses base64 decoding errors reported by customers and #6492",
          "timestamp": "2023-10-04T16:08:41-07:00",
          "tree_id": "cf872b583078855393f49b11b27614333f6f620d",
          "url": "https://github.com/KarishmaGhiya/microsoft-authentication-library-for-js/commit/90629381de88e0bb391c3cb658b9ec2923806993"
        },
        "date": 1696465690585,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 126958,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "217 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 124663,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "224 samples"
          }
        ]
      }
    ]
  }
}