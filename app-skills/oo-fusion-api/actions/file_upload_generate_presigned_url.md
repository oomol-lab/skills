# Oomol Fusion API · `file_upload_generate_presigned_url`

Generate a presigned URL for file upload

- **Service**: `fusion-api`
- **Action**: `file_upload_generate_presigned_url`
- **Action id**: `fusion-api.file_upload_generate_presigned_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "file_upload_generate_presigned_url"
```

## Run

```bash
oo connector run "fusion-api" --action "file_upload_generate_presigned_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Oomol Fusion API state. Confirm the exact payload and intended effect with the user before running.
