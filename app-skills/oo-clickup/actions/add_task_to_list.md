# ClickUp · `add_task_to_list`

Add a ClickUp task to an additional list.

- **Service**: `clickup`
- **Action**: `add_task_to_list`
- **Action id**: `clickup.add_task_to_list`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "add_task_to_list"
```

## Run

```bash
oo connector run "clickup" --action "add_task_to_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ClickUp state. Confirm the exact payload and intended effect with the user before running.
