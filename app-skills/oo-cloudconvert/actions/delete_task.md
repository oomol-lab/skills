# CloudConvert · `delete_task`

Delete a CloudConvert task, including all related data.

- **Service**: `cloudconvert`
- **Action**: `delete_task`
- **Action id**: `cloudconvert.delete_task`
- **Required scopes**: task.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudconvert" --action "delete_task"
```

## Run

```bash
oo connector run "cloudconvert" --action "delete_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites CloudConvert data. Always confirm the target and get explicit user approval before running.
