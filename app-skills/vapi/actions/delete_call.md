# Vapi · `delete_call`

Delete a Vapi call by its unique identifier.

- **Service**: `vapi`
- **Action**: `delete_call`
- **Action id**: `vapi.delete_call`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "delete_call"
```

## Run

```bash
oo connector run "vapi" --action "delete_call" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Vapi data. Always confirm the target and get explicit user approval before running.
