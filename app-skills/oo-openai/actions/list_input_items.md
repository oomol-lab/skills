# OpenAI · `list_input_items`

List the stored input items for one OpenAI response.

- **Service**: `openai`
- **Action**: `list_input_items`
- **Action id**: `openai.list_input_items`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openai" --action "list_input_items"
```

## Run

```bash
oo connector run "openai" --action "list_input_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
