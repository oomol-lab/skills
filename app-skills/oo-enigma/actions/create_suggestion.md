# Enigma · `create_suggestion`

Submit a suggestion to Enigma for data correction or enrichment feedback using the official GraphQL suggestion mutation.

- **Service**: `enigma`
- **Action**: `create_suggestion`
- **Action id**: `enigma.create_suggestion`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "enigma" --action "create_suggestion"
```

## Run

```bash
oo connector run "enigma" --action "create_suggestion" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Enigma state. Confirm the exact payload and intended effect with the user before running.
