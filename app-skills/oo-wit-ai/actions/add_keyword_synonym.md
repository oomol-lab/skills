# Wit.ai · `add_keyword_synonym`

Add a synonym to a specific keyword on a Wit.ai entity.

- **Service**: `wit_ai`
- **Action**: `add_keyword_synonym`
- **Action id**: `wit_ai.add_keyword_synonym`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "add_keyword_synonym"
```

## Run

```bash
oo connector run "wit_ai" --action "add_keyword_synonym" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Wit.ai state. Confirm the exact payload and intended effect with the user before running.
