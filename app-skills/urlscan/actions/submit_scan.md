# urlscan.io · `submit_scan`

Submit a URL to urlscan.io for scanning.

- **Service**: `urlscan`
- **Action**: `submit_scan`
- **Action id**: `urlscan.submit_scan`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "urlscan" --action "submit_scan"
```

## Run

```bash
oo connector run "urlscan" --action "submit_scan" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes urlscan.io state. Confirm the exact payload and intended effect with the user before running.
