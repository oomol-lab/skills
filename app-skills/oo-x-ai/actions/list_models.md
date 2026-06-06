# xAI · `list_models`

List the xAI models available to the current API key.

- **Service**: `x_ai`
- **Action**: `list_models`
- **Action id**: `x_ai.list_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "x_ai" --action "list_models"
```

## Run

```bash
oo connector run "x_ai" --action "list_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
