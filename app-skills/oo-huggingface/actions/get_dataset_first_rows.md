# Hugging Face · `get_dataset_first_rows`

Preview the first rows of a dataset split from the Hugging Face Dataset Viewer.

- **Service**: `huggingface`
- **Action**: `get_dataset_first_rows`
- **Action id**: `huggingface.get_dataset_first_rows`
- **Required scopes**: huggingface.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "huggingface" --action "get_dataset_first_rows"
```

## Run

```bash
oo connector run "huggingface" --action "get_dataset_first_rows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
