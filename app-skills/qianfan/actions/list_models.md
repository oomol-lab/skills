# Baidu Qianfan · `list_models`

List the models available to the current Baidu Qianfan API key.

- **Service**: `qianfan`
- **Action**: `list_models`
- **Action id**: `qianfan.list_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "list_models"
```

## Run

```bash
oo connector run "qianfan" --action "list_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
