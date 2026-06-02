# Alibaba Cloud OSS · `list_objects`

List objects in an OSS bucket with the ListObjectsV2 API.

- **Service**: `aliyun_oss`
- **Action**: `list_objects`
- **Action id**: `aliyun_oss.list_objects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aliyun_oss" --action "list_objects"
```

## Run

```bash
oo connector run "aliyun_oss" --action "list_objects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
