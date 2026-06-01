# GroqCloud · `get_model`

Fetch metadata for one GroqCloud model.

- **Service**: `groqcloud`
- **Action**: `get_model`
- **Action id**: `groqcloud.get_model`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "groqcloud" --action "get_model"
```

## Run

```bash
oo connector run "groqcloud" --action "get_model" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
