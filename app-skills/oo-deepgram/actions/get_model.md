# Deepgram · `get_model`

Get metadata for one public Deepgram model.

- **Service**: `deepgram`
- **Action**: `get_model`
- **Action id**: `deepgram.get_model`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "deepgram" --action "get_model"
```

## Run

```bash
oo connector run "deepgram" --action "get_model" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
