# Runpod · `start_pod`

Start or resume a Runpod Pod.

- **Service**: `runpod`
- **Action**: `start_pod`
- **Action id**: `runpod.start_pod`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "runpod" --action "start_pod"
```

## Run

```bash
oo connector run "runpod" --action "start_pod" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
