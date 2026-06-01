# AWS STS · `assume_role`

Use a connected AWS access key pair to call STS AssumeRole and return temporary credentials.

- **Service**: `aws_sts`
- **Action**: `assume_role`
- **Action id**: `aws_sts.assume_role`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aws_sts" --action "assume_role"
```

## Run

```bash
oo connector run "aws_sts" --action "assume_role" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
