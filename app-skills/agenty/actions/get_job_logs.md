# Agenty · `get_job_logs`

Get raw log content for one Agenty job.

- **Service**: `agenty`
- **Action**: `get_job_logs`
- **Action id**: `agenty.get_job_logs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "get_job_logs"
```

## Run

```bash
oo connector run "agenty" --action "get_job_logs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
