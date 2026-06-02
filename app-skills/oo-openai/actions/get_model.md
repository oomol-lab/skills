# OpenAI · `get_model`

Retrieve the metadata for a single OpenAI model by ID.

- **Service**: `openai`
- **Action**: `get_model`
- **Action id**: `openai.get_model`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openai" --action "get_model"
```

## Run

```bash
oo connector run "openai" --action "get_model" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
