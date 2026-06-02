# TextCortex · `retrieve_model`

Retrieve metadata for one TextCortex model by model id.

- **Service**: `textcortex`
- **Action**: `retrieve_model`
- **Action id**: `textcortex.retrieve_model`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "textcortex" --action "retrieve_model"
```

## Run

```bash
oo connector run "textcortex" --action "retrieve_model" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
