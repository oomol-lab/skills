# Hugging Face · `get_model_info`

Get detailed metadata for a Hugging Face model by modelId.

- **Service**: `huggingface`
- **Action**: `get_model_info`
- **Action id**: `huggingface.get_model_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "huggingface" --action "get_model_info"
```

## Run

```bash
oo connector run "huggingface" --action "get_model_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
