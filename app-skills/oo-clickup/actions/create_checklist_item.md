# ClickUp · `create_checklist_item`

Create a checklist item on a ClickUp checklist.

- **Service**: `clickup`
- **Action**: `create_checklist_item`
- **Action id**: `clickup.create_checklist_item`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "create_checklist_item"
```

## Run

```bash
oo connector run "clickup" --action "create_checklist_item" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ClickUp state. Confirm the exact payload and intended effect with the user before running.
