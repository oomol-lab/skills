# Baidu Qianfan · `get_file_content`

Fetch the raw content of a Baidu Qianfan file by its identifier.

- **Service**: `qianfan`
- **Action**: `get_file_content`
- **Action id**: `qianfan.get_file_content`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "get_file_content"
```

## Run

```bash
oo connector run "qianfan" --action "get_file_content" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
