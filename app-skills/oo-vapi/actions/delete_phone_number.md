# Vapi · `delete_phone_number`

Delete a Vapi phone number by its unique identifier.

- **Service**: `vapi`
- **Action**: `delete_phone_number`
- **Action id**: `vapi.delete_phone_number`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "delete_phone_number"
```

## Run

```bash
oo connector run "vapi" --action "delete_phone_number" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Vapi data. Always confirm the target and get explicit user approval before running.
