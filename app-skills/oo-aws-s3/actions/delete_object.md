# AWS S3 · `delete_object`

Delete one S3 object.

- **Service**: `aws_s3`
- **Action**: `delete_object`
- **Action id**: `aws_s3.delete_object`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aws_s3" --action "delete_object"
```

## Run

```bash
oo connector run "aws_s3" --action "delete_object" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites AWS S3 data. Always confirm the target and get explicit user approval before running.
