# Alibaba Cloud OSS · `put_object`

Upload one object to OSS from a public URL, plain text, or base64-encoded content.

- **Service**: `aliyun_oss`
- **Action**: `put_object`
- **Action id**: `aliyun_oss.put_object`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aliyun_oss" --action "put_object"
```

## Run

```bash
oo connector run "aliyun_oss" --action "put_object" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Alibaba Cloud OSS state. Confirm the exact payload and intended effect with the user before running.
