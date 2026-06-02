# TextCortex · `list_models`

List TextCortex models available to the API key.

- **Service**: `textcortex`
- **Action**: `list_models`
- **Action id**: `textcortex.list_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "textcortex" --action "list_models"
```

## Run

```bash
oo connector run "textcortex" --action "list_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
