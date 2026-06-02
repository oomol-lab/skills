# Perplexity · `list_models`

List the models currently available from Perplexity.

- **Service**: `perplexity`
- **Action**: `list_models`
- **Action id**: `perplexity.list_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "perplexity" --action "list_models"
```

## Run

```bash
oo connector run "perplexity" --action "list_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
