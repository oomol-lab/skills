# Vimeo · `upload_video_from_url`

Upload a new Vimeo video by asking Vimeo to pull the media from an HTTP or HTTPS URL.

- **Service**: `vimeo`
- **Action**: `upload_video_from_url`
- **Action id**: `vimeo.upload_video_from_url`
- **Required scopes**: vimeo.upload

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "upload_video_from_url"
```

## Run

```bash
oo connector run "vimeo" --action "upload_video_from_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vimeo state. Confirm the exact payload and intended effect with the user before running.
