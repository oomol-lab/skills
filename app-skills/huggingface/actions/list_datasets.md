# Hugging Face · `list_datasets`

List Hugging Face datasets using user-friendly search filters.

- **Service**: `huggingface`
- **Action**: `list_datasets`
- **Action id**: `huggingface.list_datasets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "huggingface" --action "list_datasets"
```

## Run

```bash
oo connector run "huggingface" --action "list_datasets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
