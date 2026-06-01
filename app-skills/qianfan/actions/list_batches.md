# Baidu Qianfan · `list_batches`

List Baidu Qianfan batch prediction jobs with optional pagination.

- **Service**: `qianfan`
- **Action**: `list_batches`
- **Action id**: `qianfan.list_batches`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "list_batches"
```

## Run

```bash
oo connector run "qianfan" --action "list_batches" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
