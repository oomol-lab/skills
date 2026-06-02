# CloudConvert · `wait_for_job`

Wait synchronously for a CloudConvert job to finish and return the finished or failed job with tasks.

- **Service**: `cloudconvert`
- **Action**: `wait_for_job`
- **Action id**: `cloudconvert.wait_for_job`
- **Required scopes**: task.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudconvert" --action "wait_for_job"
```

## Run

```bash
oo connector run "cloudconvert" --action "wait_for_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
