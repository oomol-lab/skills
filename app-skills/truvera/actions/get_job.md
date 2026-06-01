# Truvera · `get_job`

Get the latest status and result payload for a Truvera background job.

- **Service**: `truvera`
- **Action**: `get_job`
- **Action id**: `truvera.get_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "truvera" --action "get_job"
```

## Run

```bash
oo connector run "truvera" --action "get_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
