# Mopinion · `get_deployment`

Fetch one Mopinion deployment by deployment identifier.

- **Service**: `mopinion`
- **Action**: `get_deployment`
- **Action id**: `mopinion.get_deployment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mopinion" --action "get_deployment"
```

## Run

```bash
oo connector run "mopinion" --action "get_deployment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
