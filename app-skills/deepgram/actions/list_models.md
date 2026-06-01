# Deepgram · `list_models`

List the latest public Deepgram models.

- **Service**: `deepgram`
- **Action**: `list_models`
- **Action id**: `deepgram.list_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "deepgram" --action "list_models"
```

## Run

```bash
oo connector run "deepgram" --action "list_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
