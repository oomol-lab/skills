# Google BigQuery · `cancel_job`

Cancel a BigQuery job.

- **Service**: `google_bigquery`
- **Action**: `cancel_job`
- **Action id**: `google_bigquery.cancel_job`
- **Required scopes**: google_bigquery.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "cancel_job"
```

## Run

```bash
oo connector run "google_bigquery" --action "cancel_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
