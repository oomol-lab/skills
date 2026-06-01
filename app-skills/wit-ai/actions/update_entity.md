# Wit.ai · `update_entity`

Update a Wit.ai entity by sending the desired end-state definition for its schema and keywords.

- **Service**: `wit_ai`
- **Action**: `update_entity`
- **Action id**: `wit_ai.update_entity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "update_entity"
```

## Run

```bash
oo connector run "wit_ai" --action "update_entity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Wit.ai state. Confirm the exact payload and intended effect with the user before running.
