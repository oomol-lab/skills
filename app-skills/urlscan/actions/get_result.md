# urlscan.io · `get_result`

Retrieve the JSON result for a completed urlscan.io scan.

- **Service**: `urlscan`
- **Action**: `get_result`
- **Action id**: `urlscan.get_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "urlscan" --action "get_result"
```

## Run

```bash
oo connector run "urlscan" --action "get_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
