# Wit.ai · `list_entities`

List all entities defined in the current Wit.ai app.

- **Service**: `wit_ai`
- **Action**: `list_entities`
- **Action id**: `wit_ai.list_entities`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "list_entities"
```

## Run

```bash
oo connector run "wit_ai" --action "list_entities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
