# CloudConvert · `get_job`

Get a single CloudConvert job and include its tasks.

- **Service**: `cloudconvert`
- **Action**: `get_job`
- **Action id**: `cloudconvert.get_job`
- **Required scopes**: task.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudconvert" --action "get_job"
```

## Run

```bash
oo connector run "cloudconvert" --action "get_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
