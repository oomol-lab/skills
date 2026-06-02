# AWS S3 · `put_object`

Upload one object to S3 from a public URL, plain text, or base64-encoded content.

- **Service**: `aws_s3`
- **Action**: `put_object`
- **Action id**: `aws_s3.put_object`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aws_s3" --action "put_object"
```

## Run

```bash
oo connector run "aws_s3" --action "put_object" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes AWS S3 state. Confirm the exact payload and intended effect with the user before running.
