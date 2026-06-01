# Runpod · `stop_pod`

Stop a Runpod Pod.

- **Service**: `runpod`
- **Action**: `stop_pod`
- **Action id**: `runpod.stop_pod`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "runpod" --action "stop_pod"
```

## Run

```bash
oo connector run "runpod" --action "stop_pod" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
