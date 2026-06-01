# Alibaba Cloud OSS · `list_buckets`

List OSS buckets visible to the connected Alibaba Cloud credential.

- **Service**: `aliyun_oss`
- **Action**: `list_buckets`
- **Action id**: `aliyun_oss.list_buckets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aliyun_oss" --action "list_buckets"
```

## Run

```bash
oo connector run "aliyun_oss" --action "list_buckets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
