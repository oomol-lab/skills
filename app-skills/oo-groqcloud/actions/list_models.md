# GroqCloud · `list_models`

List the GroqCloud models available to the current API key.

- **Service**: `groqcloud`
- **Action**: `list_models`
- **Action id**: `groqcloud.list_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "groqcloud" --action "list_models"
```

## Run

```bash
oo connector run "groqcloud" --action "list_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
