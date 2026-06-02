# fal.ai · `queue_get_status_stream`

Consume fal queue status updates as a streamed sequence of SSE events until the server closes the stream.

- **Service**: `fal_ai`
- **Action**: `queue_get_status_stream`
- **Action id**: `fal_ai.queue_get_status_stream`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fal_ai" --action "queue_get_status_stream"
```

## Run

```bash
oo connector run "fal_ai" --action "queue_get_status_stream" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
