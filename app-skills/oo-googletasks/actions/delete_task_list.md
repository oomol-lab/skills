# Google Tasks · `delete_task_list`

Delete a Google Tasks task list.

- **Service**: `googletasks`
- **Action**: `delete_task_list`
- **Action id**: `googletasks.delete_task_list`
- **Required scopes**: googletasks.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googletasks" --action "delete_task_list"
```

## Run

```bash
oo connector run "googletasks" --action "delete_task_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Tasks data. Always confirm the target and get explicit user approval before running.
