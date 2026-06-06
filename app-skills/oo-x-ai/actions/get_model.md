# xAI · `get_model`

Fetch metadata for one xAI model.

- **Service**: `x_ai`
- **Action**: `get_model`
- **Action id**: `x_ai.get_model`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "x_ai" --action "get_model"
```

## Run

```bash
oo connector run "x_ai" --action "get_model" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
