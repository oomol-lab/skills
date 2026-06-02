# Gemini · `list_models`

List the available Gemini and Veo models.

- **Service**: `gemini`
- **Action**: `list_models`
- **Action id**: `gemini.list_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gemini" --action "list_models"
```

## Run

```bash
oo connector run "gemini" --action "list_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
