# YouTube · `upload_video_from_url`

Upload a YouTube video from an HTTPS media URL using the resumable upload API.

- **Service**: `youtube`
- **Action**: `upload_video_from_url`
- **Action id**: `youtube.upload_video_from_url`
- **Required scopes**: youtube.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "upload_video_from_url"
```

## Run

```bash
oo connector run "youtube" --action "upload_video_from_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes YouTube state. Confirm the exact payload and intended effect with the user before running.
