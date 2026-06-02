# fal.ai · `queue_get_status`

Check the status of a queued fal request, with optional log retrieval for in-progress or completed work.

- **Service**: `fal_ai`
- **Action**: `queue_get_status`
- **Action id**: `fal_ai.queue_get_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fal_ai" --action "queue_get_status"
```

## Run

```bash
oo connector run "fal_ai" --action "queue_get_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
