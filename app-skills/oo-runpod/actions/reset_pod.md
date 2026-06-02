# Runpod · `reset_pod`

Reset a Runpod Pod.

- **Service**: `runpod`
- **Action**: `reset_pod`
- **Action id**: `runpod.reset_pod`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "runpod" --action "reset_pod"
```

## Run

```bash
oo connector run "runpod" --action "reset_pod" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
