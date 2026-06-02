# Wit.ai · `get_entity`

Retrieve a Wit.ai entity including its roles, lookups, and keywords.

- **Service**: `wit_ai`
- **Action**: `get_entity`
- **Action id**: `wit_ai.get_entity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "get_entity"
```

## Run

```bash
oo connector run "wit_ai" --action "get_entity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
