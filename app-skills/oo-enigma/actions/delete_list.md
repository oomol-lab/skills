# Enigma · `delete_list`

Delete a user-managed Enigma list by ID.

- **Service**: `enigma`
- **Action**: `delete_list`
- **Action id**: `enigma.delete_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "enigma" --action "delete_list"
```

## Run

```bash
oo connector run "enigma" --action "delete_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Enigma data. Always confirm the target and get explicit user approval before running.
