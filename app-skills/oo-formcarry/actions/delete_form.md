# Formcarry · `delete_form`

Delete an existing Formcarry form by ID.

- **Service**: `formcarry`
- **Action**: `delete_form`
- **Action id**: `formcarry.delete_form`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formcarry" --action "delete_form"
```

## Run

```bash
oo connector run "formcarry" --action "delete_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Formcarry data. Always confirm the target and get explicit user approval before running.
