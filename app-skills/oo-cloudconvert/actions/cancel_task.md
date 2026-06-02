# CloudConvert · `cancel_task`

Cancel a CloudConvert task that is still waiting or processing.

- **Service**: `cloudconvert`
- **Action**: `cancel_task`
- **Action id**: `cloudconvert.cancel_task`
- **Required scopes**: task.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudconvert" --action "cancel_task"
```

## Run

```bash
oo connector run "cloudconvert" --action "cancel_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
