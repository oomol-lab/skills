# Baidu Qianfan · `list_files`

List files stored in Baidu Qianfan with optional filters.

- **Service**: `qianfan`
- **Action**: `list_files`
- **Action id**: `qianfan.list_files`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "list_files"
```

## Run

```bash
oo connector run "qianfan" --action "list_files" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
