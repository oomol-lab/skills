# Hugging Face · `list_spaces`

List Hugging Face Spaces using user-friendly discovery filters.

- **Service**: `huggingface`
- **Action**: `list_spaces`
- **Action id**: `huggingface.list_spaces`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "huggingface" --action "list_spaces"
```

## Run

```bash
oo connector run "huggingface" --action "list_spaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
