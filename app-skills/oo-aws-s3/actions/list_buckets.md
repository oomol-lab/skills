# AWS S3 · `list_buckets`

List Amazon S3 buckets visible to the connected AWS credential.

- **Service**: `aws_s3`
- **Action**: `list_buckets`
- **Action id**: `aws_s3.list_buckets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aws_s3" --action "list_buckets"
```

## Run

```bash
oo connector run "aws_s3" --action "list_buckets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
