# Fireflies · `delete_askfred_thread`

Delete a Fireflies AskFred thread by thread ID.

- **Service**: `fireflies`
- **Action**: `delete_askfred_thread`
- **Action id**: `fireflies.delete_askfred_thread`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "delete_askfred_thread"
```

## Run

```bash
oo connector run "fireflies" --action "delete_askfred_thread" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Fireflies data. Always confirm the target and get explicit user approval before running.
