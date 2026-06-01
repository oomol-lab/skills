# Runpod · `get_pod`

Get one Runpod Pod by ID.

- **Service**: `runpod`
- **Action**: `get_pod`
- **Action id**: `runpod.get_pod`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "runpod" --action "get_pod"
```

## Run

```bash
oo connector run "runpod" --action "get_pod" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
