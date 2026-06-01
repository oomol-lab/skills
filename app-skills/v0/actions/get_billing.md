# v0 · `get_billing`

Get current v0 billing and quota information.

- **Service**: `v0`
- **Action**: `get_billing`
- **Action id**: `v0.get_billing`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "get_billing"
```

## Run

```bash
oo connector run "v0" --action "get_billing" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
