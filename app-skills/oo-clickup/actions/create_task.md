# ClickUp · `create_task`

Create a ClickUp task in a list with optional scheduling and assignee fields.

- **Service**: `clickup`
- **Action**: `create_task`
- **Action id**: `clickup.create_task`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "create_task"
```

## Run

```bash
oo connector run "clickup" --action "create_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ClickUp state. Confirm the exact payload and intended effect with the user before running.
