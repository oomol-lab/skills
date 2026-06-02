# Oomol Fusion API · `file_upload_generate_presigned_urls`

Generate a presigned URL for multipart upload parts

- **Service**: `fusion-api`
- **Action**: `file_upload_generate_presigned_urls`
- **Action id**: `fusion-api.file_upload_generate_presigned_urls`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "file_upload_generate_presigned_urls"
```

## Run

```bash
oo connector run "fusion-api" --action "file_upload_generate_presigned_urls" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Oomol Fusion API state. Confirm the exact payload and intended effect with the user before running.
