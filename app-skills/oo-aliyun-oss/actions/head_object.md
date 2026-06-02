# Alibaba Cloud OSS · `head_object`

Fetch structured metadata for one OSS object.

- **Service**: `aliyun_oss`
- **Action**: `head_object`
- **Action id**: `aliyun_oss.head_object`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aliyun_oss" --action "head_object"
```

## Run

```bash
oo connector run "aliyun_oss" --action "head_object" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
