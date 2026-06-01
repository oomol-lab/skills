# ClickUp · `delete_checklist_item`

Delete a ClickUp checklist item by checklist item ID.

- **Service**: `clickup`
- **Action**: `delete_checklist_item`
- **Action id**: `clickup.delete_checklist_item`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "delete_checklist_item"
```

## Run

```bash
oo connector run "clickup" --action "delete_checklist_item" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ClickUp data. Always confirm the target and get explicit user approval before running.
