# Wit.ai · `add_entity_keyword`

Add a keyword and optional synonyms to an existing Wit.ai entity.

- **Service**: `wit_ai`
- **Action**: `add_entity_keyword`
- **Action id**: `wit_ai.add_entity_keyword`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "add_entity_keyword"
```

## Run

```bash
oo connector run "wit_ai" --action "add_entity_keyword" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Wit.ai state. Confirm the exact payload and intended effect with the user before running.
