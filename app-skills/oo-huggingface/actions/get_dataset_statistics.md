# Hugging Face · `get_dataset_statistics`

Get column statistics for a dataset split from the Hugging Face Dataset Viewer.

- **Service**: `huggingface`
- **Action**: `get_dataset_statistics`
- **Action id**: `huggingface.get_dataset_statistics`
- **Required scopes**: huggingface.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "huggingface" --action "get_dataset_statistics"
```

## Run

```bash
oo connector run "huggingface" --action "get_dataset_statistics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
