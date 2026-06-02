# Google Tasks · `create_task_list`

Create a new Google Tasks task list.

- **Service**: `googletasks`
- **Action**: `create_task_list`
- **Action id**: `googletasks.create_task_list`
- **Required scopes**: googletasks.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googletasks" --action "create_task_list"
```

## Run

```bash
oo connector run "googletasks" --action "create_task_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Tasks state. Confirm the exact payload and intended effect with the user before running.
