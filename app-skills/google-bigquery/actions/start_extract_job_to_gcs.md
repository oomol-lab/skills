# Google BigQuery · `start_extract_job_to_gcs`

Start an asynchronous BigQuery extract job to Cloud Storage objects.

- **Service**: `google_bigquery`
- **Action**: `start_extract_job_to_gcs`
- **Action id**: `google_bigquery.start_extract_job_to_gcs`
- **Required scopes**: google_bigquery.write, google_bigquery.storage_write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "start_extract_job_to_gcs"
```

## Run

```bash
oo connector run "google_bigquery" --action "start_extract_job_to_gcs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
