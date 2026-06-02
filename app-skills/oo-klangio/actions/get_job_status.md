# Klangio · `get_job_status`

Fetch the current processing status for a Klangio job.

- **Service**: `klangio`
- **Action**: `get_job_status`
- **Action id**: `klangio.get_job_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "klangio" --action "get_job_status"
```

## Run

```bash
oo connector run "klangio" --action "get_job_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
