# CloudConvert · `list_jobs`

List CloudConvert jobs for the current account.

- **Service**: `cloudconvert`
- **Action**: `list_jobs`
- **Action id**: `cloudconvert.list_jobs`
- **Required scopes**: task.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudconvert" --action "list_jobs"
```

## Run

```bash
oo connector run "cloudconvert" --action "list_jobs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
