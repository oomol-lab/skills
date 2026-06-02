# Twitter · `get_media_upload_status`

Get the processing status for a chunked X media upload.

- **Service**: `twitter`
- **Action**: `get_media_upload_status`
- **Action id**: `twitter.get_media_upload_status`
- **Required scopes**: twitter.media.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_media_upload_status"
```

## Run

```bash
oo connector run "twitter" --action "get_media_upload_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
