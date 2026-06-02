# ClickUp · `update_checklist`

Update a ClickUp checklist by checklist ID.

- **Service**: `clickup`
- **Action**: `update_checklist`
- **Action id**: `clickup.update_checklist`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "update_checklist"
```

## Run

```bash
oo connector run "clickup" --action "update_checklist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ClickUp state. Confirm the exact payload and intended effect with the user before running.
