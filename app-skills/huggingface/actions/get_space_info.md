# Hugging Face · `get_space_info`

Get detailed metadata for a Hugging Face Space by repo id.

- **Service**: `huggingface`
- **Action**: `get_space_info`
- **Action id**: `huggingface.get_space_info`
- **Required scopes**: huggingface.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "huggingface" --action "get_space_info"
```

## Run

```bash
oo connector run "huggingface" --action "get_space_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
