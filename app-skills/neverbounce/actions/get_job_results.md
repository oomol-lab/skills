# NeverBounce · `get_job_results`

Retrieve paginated NeverBounce verification results for a completed bulk job.

- **Service**: `neverbounce`
- **Action**: `get_job_results`
- **Action id**: `neverbounce.get_job_results`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neverbounce" --action "get_job_results"
```

## Run

```bash
oo connector run "neverbounce" --action "get_job_results" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
