# Alibaba Cloud OSS · `delete_object`

Delete one OSS object.

- **Service**: `aliyun_oss`
- **Action**: `delete_object`
- **Action id**: `aliyun_oss.delete_object`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aliyun_oss" --action "delete_object"
```

## Run

```bash
oo connector run "aliyun_oss" --action "delete_object" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Alibaba Cloud OSS data. Always confirm the target and get explicit user approval before running.
