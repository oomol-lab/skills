# AWS S3 · `head_object`

Fetch structured metadata for one S3 object.

- **Service**: `aws_s3`
- **Action**: `head_object`
- **Action id**: `aws_s3.head_object`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aws_s3" --action "head_object"
```

## Run

```bash
oo connector run "aws_s3" --action "head_object" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
