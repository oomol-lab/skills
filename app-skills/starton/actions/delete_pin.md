# Starton · `delete_pin`

Delete a Starton pin by pin identifier.

- **Service**: `starton`
- **Action**: `delete_pin`
- **Action id**: `starton.delete_pin`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "starton" --action "delete_pin"
```

## Run

```bash
oo connector run "starton" --action "delete_pin" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Starton data. Always confirm the target and get explicit user approval before running.
