# Wit.ai · `list_intents`

List all intents defined in the current Wit.ai app.

- **Service**: `wit_ai`
- **Action**: `list_intents`
- **Action id**: `wit_ai.list_intents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "list_intents"
```

## Run

```bash
oo connector run "wit_ai" --action "list_intents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
