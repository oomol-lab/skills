# fal.ai · `get_queue_request_result`

Retrieve the stored final result payload for a completed fal queued request.

- **Service**: `fal_ai`
- **Action**: `get_queue_request_result`
- **Action id**: `fal_ai.get_queue_request_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fal_ai" --action "get_queue_request_result"
```

## Run

```bash
oo connector run "fal_ai" --action "get_queue_request_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
