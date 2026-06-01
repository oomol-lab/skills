# Agenty · `get_job_result`

Get paginated result rows for one Agenty job.

- **Service**: `agenty`
- **Action**: `get_job_result`
- **Action id**: `agenty.get_job_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "get_job_result"
```

## Run

```bash
oo connector run "agenty" --action "get_job_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
