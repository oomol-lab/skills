# CloudConvert · `delete_job`

Delete a CloudConvert job, including all tasks and related data.

- **Service**: `cloudconvert`
- **Action**: `delete_job`
- **Action id**: `cloudconvert.delete_job`
- **Required scopes**: task.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudconvert" --action "delete_job"
```

## Run

```bash
oo connector run "cloudconvert" --action "delete_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites CloudConvert data. Always confirm the target and get explicit user approval before running.
