# IPQualityScore · `scan_url`

Scan a URL or domain and return malware, phishing, and domain risk signals.

- **Service**: `ipqualityscore`
- **Action**: `scan_url`
- **Action id**: `ipqualityscore.scan_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipqualityscore" --action "scan_url"
```

## Run

```bash
oo connector run "ipqualityscore" --action "scan_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
