# Runpod · `list_pods`

List Runpod Pods with optional official filter parameters.

- **Service**: `runpod`
- **Action**: `list_pods`
- **Action id**: `runpod.list_pods`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "runpod" --action "list_pods"
```

## Run

```bash
oo connector run "runpod" --action "list_pods" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
