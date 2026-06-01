# Twitter · `upload_large_media`

Upload a video or other large media file to X from a temporary HTTP URL using chunked media upload.

- **Service**: `twitter`
- **Action**: `upload_large_media`
- **Action id**: `twitter.upload_large_media`
- **Required scopes**: twitter.media.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "upload_large_media"
```

## Run

```bash
oo connector run "twitter" --action "upload_large_media" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
