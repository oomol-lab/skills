# OpenAI · `list_models`

List the OpenAI models available to the current API key.

- **Service**: `openai`
- **Action**: `list_models`
- **Action id**: `openai.list_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openai" --action "list_models"
```

## Run

```bash
oo connector run "openai" --action "list_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
