# NeverBounce · `get_job_status`

Retrieve the current processing status and aggregate counts for a NeverBounce job.

- **Service**: `neverbounce`
- **Action**: `get_job_status`
- **Action id**: `neverbounce.get_job_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neverbounce" --action "get_job_status"
```

## Run

```bash
oo connector run "neverbounce" --action "get_job_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
