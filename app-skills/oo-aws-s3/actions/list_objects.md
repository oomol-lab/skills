# AWS S3 · `list_objects`

List objects in an S3 bucket with the ListObjectsV2 API.

- **Service**: `aws_s3`
- **Action**: `list_objects`
- **Action id**: `aws_s3.list_objects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aws_s3" --action "list_objects"
```

## Run

```bash
oo connector run "aws_s3" --action "list_objects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
