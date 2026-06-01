# CloudConvert · `retry_task`

Retry a CloudConvert task by creating a new task from the original payload.

- **Service**: `cloudconvert`
- **Action**: `retry_task`
- **Action id**: `cloudconvert.retry_task`
- **Required scopes**: task.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudconvert" --action "retry_task"
```

## Run

```bash
oo connector run "cloudconvert" --action "retry_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
