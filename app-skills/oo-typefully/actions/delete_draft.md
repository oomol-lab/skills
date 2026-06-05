# Typefully · `delete_draft`

Delete a Typefully draft by ID.

- **Service**: `typefully`
- **Action**: `delete_draft`
- **Action id**: `typefully.delete_draft`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "typefully" --action "delete_draft"
```

## Run

```bash
oo connector run "typefully" --action "delete_draft" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Typefully data. Always confirm the target and get explicit user approval before running.
