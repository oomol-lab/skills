# ClickUp · `delete_checklist`

Delete a ClickUp checklist by checklist ID.

- **Service**: `clickup`
- **Action**: `delete_checklist`
- **Action id**: `clickup.delete_checklist`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "delete_checklist"
```

## Run

```bash
oo connector run "clickup" --action "delete_checklist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ClickUp data. Always confirm the target and get explicit user approval before running.
