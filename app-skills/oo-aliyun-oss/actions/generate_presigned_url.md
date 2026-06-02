# Alibaba Cloud OSS · `generate_presigned_url`

Generate a pre-signed OSS URL for reading, uploading, or deleting one object.

- **Service**: `aliyun_oss`
- **Action**: `generate_presigned_url`
- **Action id**: `aliyun_oss.generate_presigned_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aliyun_oss" --action "generate_presigned_url"
```

## Run

```bash
oo connector run "aliyun_oss" --action "generate_presigned_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
