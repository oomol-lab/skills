# Runpod · `restart_pod`

Restart a Runpod Pod.

- **Service**: `runpod`
- **Action**: `restart_pod`
- **Action id**: `runpod.restart_pod`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "runpod" --action "restart_pod"
```

## Run

```bash
oo connector run "runpod" --action "restart_pod" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
