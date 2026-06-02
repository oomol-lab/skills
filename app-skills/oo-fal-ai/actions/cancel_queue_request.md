# fal.ai · `cancel_queue_request`

Request cancellation of a queued or in-progress fal request by model ID and request ID.

- **Service**: `fal_ai`
- **Action**: `cancel_queue_request`
- **Action id**: `fal_ai.cancel_queue_request`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fal_ai" --action "cancel_queue_request"
```

## Run

```bash
oo connector run "fal_ai" --action "cancel_queue_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
