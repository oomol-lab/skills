# Wit.ai · `get_intent`

Retrieve a Wit.ai intent together with the entity bindings it uses.

- **Service**: `wit_ai`
- **Action**: `get_intent`
- **Action id**: `wit_ai.get_intent`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "get_intent"
```

## Run

```bash
oo connector run "wit_ai" --action "get_intent" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
