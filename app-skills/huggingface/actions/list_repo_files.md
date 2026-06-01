# Hugging Face · `list_repo_files`

List files in a Hugging Face repository tree.

- **Service**: `huggingface`
- **Action**: `list_repo_files`
- **Action id**: `huggingface.list_repo_files`
- **Required scopes**: huggingface.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "huggingface" --action "list_repo_files"
```

## Run

```bash
oo connector run "huggingface" --action "list_repo_files" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
