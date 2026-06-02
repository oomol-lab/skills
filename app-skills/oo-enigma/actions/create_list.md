# Enigma · `create_list`

Create a user-managed Enigma list from a search definition or input file, with optional aliases, column ordering, and column mapping.

- **Service**: `enigma`
- **Action**: `create_list`
- **Action id**: `enigma.create_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "enigma" --action "create_list"
```

## Run

```bash
oo connector run "enigma" --action "create_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Enigma state. Confirm the exact payload and intended effect with the user before running.
