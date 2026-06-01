# Runpod · `delete_pod`

Delete a Runpod Pod.

- **Service**: `runpod`
- **Action**: `delete_pod`
- **Action id**: `runpod.delete_pod`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "runpod" --action "delete_pod"
```

## Run

```bash
oo connector run "runpod" --action "delete_pod" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Runpod data. Always confirm the target and get explicit user approval before running.
