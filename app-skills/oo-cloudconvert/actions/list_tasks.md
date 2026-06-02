# CloudConvert · `list_tasks`

List CloudConvert tasks for the current account.

- **Service**: `cloudconvert`
- **Action**: `list_tasks`
- **Action id**: `cloudconvert.list_tasks`
- **Required scopes**: task.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudconvert" --action "list_tasks"
```

## Run

```bash
oo connector run "cloudconvert" --action "list_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
