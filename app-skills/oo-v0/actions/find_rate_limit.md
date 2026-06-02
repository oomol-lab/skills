# v0 · `find_rate_limit`

Get current v0 rate-limit information for the workspace or a specific scope.

- **Service**: `v0`
- **Action**: `find_rate_limit`
- **Action id**: `v0.find_rate_limit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "find_rate_limit"
```

## Run

```bash
oo connector run "v0" --action "find_rate_limit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
