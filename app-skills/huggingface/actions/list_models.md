# Hugging Face · `list_models`

List Hugging Face models using user-friendly search filters.

- **Service**: `huggingface`
- **Action**: `list_models`
- **Action id**: `huggingface.list_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "huggingface" --action "list_models"
```

## Run

```bash
oo connector run "huggingface" --action "list_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
