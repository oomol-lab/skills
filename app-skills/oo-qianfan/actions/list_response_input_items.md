# Baidu Qianfan · `list_response_input_items`

List the stored context items for a previously created Baidu Qianfan response.

- **Service**: `qianfan`
- **Action**: `list_response_input_items`
- **Action id**: `qianfan.list_response_input_items`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "list_response_input_items"
```

## Run

```bash
oo connector run "qianfan" --action "list_response_input_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
