# ImgBB · `upload_image`

Upload one image to ImgBB from a public URL or Base64 content and return the hosted image metadata.

- **Service**: `imgbb`
- **Action**: `upload_image`
- **Action id**: `imgbb.upload_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "imgbb" --action "upload_image"
```

## Run

```bash
oo connector run "imgbb" --action "upload_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ImgBB state. Confirm the exact payload and intended effect with the user before running.
