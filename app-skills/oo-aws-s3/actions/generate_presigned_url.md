# AWS S3 · `generate_presigned_url`

Generate a pre-signed S3 URL for reading, uploading, or deleting one object.

- **Service**: `aws_s3`
- **Action**: `generate_presigned_url`
- **Action id**: `aws_s3.generate_presigned_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aws_s3" --action "generate_presigned_url"
```

## Run

```bash
oo connector run "aws_s3" --action "generate_presigned_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
