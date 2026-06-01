# Hugging Face · `get_trending`

Get trending Hugging Face repositories across models, datasets, and Spaces.

- **Service**: `huggingface`
- **Action**: `get_trending`
- **Action id**: `huggingface.get_trending`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "huggingface" --action "get_trending"
```

## Run

```bash
oo connector run "huggingface" --action "get_trending" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
