# Wit.ai · `create_entity`

Create a new Wit.ai entity with optional lookups and keywords.

- **Service**: `wit_ai`
- **Action**: `create_entity`
- **Action id**: `wit_ai.create_entity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "create_entity"
```

## Run

```bash
oo connector run "wit_ai" --action "create_entity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Wit.ai state. Confirm the exact payload and intended effect with the user before running.
