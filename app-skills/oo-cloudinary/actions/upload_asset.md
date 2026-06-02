# Cloudinary · `upload_asset`

Upload one asset to Cloudinary from a remote URL or Data URI and return the normalized uploaded asset record.

- **Service**: `cloudinary`
- **Action**: `upload_asset`
- **Action id**: `cloudinary.upload_asset`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudinary" --action "upload_asset"
```

## Run

```bash
oo connector run "cloudinary" --action "upload_asset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cloudinary state. Confirm the exact payload and intended effect with the user before running.
