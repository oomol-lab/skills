# v0 · `get_deployment`

Get a single deployment by deployment ID.

- **Service**: `v0`
- **Action**: `get_deployment`
- **Action id**: `v0.get_deployment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "get_deployment"
```

## Run

```bash
oo connector run "v0" --action "get_deployment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
