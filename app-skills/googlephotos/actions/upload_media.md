# Google Photos · `upload_media`

Upload one media item into Google Photos from a URL or base64 payload.

- **Service**: `googlephotos`
- **Action**: `upload_media`
- **Action id**: `googlephotos.upload_media`
- **Required scopes**: googlephotos.append

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "upload_media"
```

## Run

```bash
oo connector run "googlephotos" --action "upload_media" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Photos state. Confirm the exact payload and intended effect with the user before running.
