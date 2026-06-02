# Alibaba Cloud STS · `assume_role`

Use a connected Alibaba Cloud RAM AccessKey pair to call STS AssumeRole and return temporary credentials.

- **Service**: `aliyun_sts`
- **Action**: `assume_role`
- **Action id**: `aliyun_sts.assume_role`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aliyun_sts" --action "assume_role"
```

## Run

```bash
oo connector run "aliyun_sts" --action "assume_role" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
