# Vapi · `delete_eval`

Delete a Vapi eval by its unique identifier.

- **Service**: `vapi`
- **Action**: `delete_eval`
- **Action id**: `vapi.delete_eval`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "delete_eval"
```

## Run

```bash
oo connector run "vapi" --action "delete_eval" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Vapi data. Always confirm the target and get explicit user approval before running.
