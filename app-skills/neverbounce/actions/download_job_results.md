# NeverBounce · `download_job_results`

Download a NeverBounce bulk job as CSV with optional result filters and extra columns.

- **Service**: `neverbounce`
- **Action**: `download_job_results`
- **Action id**: `neverbounce.download_job_results`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neverbounce" --action "download_job_results"
```

## Run

```bash
oo connector run "neverbounce" --action "download_job_results" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
