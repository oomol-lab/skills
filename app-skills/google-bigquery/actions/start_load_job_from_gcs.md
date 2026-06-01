# Google BigQuery · `start_load_job_from_gcs`

Start an asynchronous BigQuery load job from Cloud Storage objects.

- **Service**: `google_bigquery`
- **Action**: `start_load_job_from_gcs`
- **Action id**: `google_bigquery.start_load_job_from_gcs`
- **Required scopes**: google_bigquery.write, google_bigquery.storage_read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "start_load_job_from_gcs"
```

## Run

```bash
oo connector run "google_bigquery" --action "start_load_job_from_gcs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
