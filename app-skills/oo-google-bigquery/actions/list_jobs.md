# Google BigQuery · `list_jobs`

List BigQuery jobs in a Google Cloud project.

- **Service**: `google_bigquery`
- **Action**: `list_jobs`
- **Action id**: `google_bigquery.list_jobs`
- **Required scopes**: google_bigquery.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "list_jobs"
```

## Run

```bash
oo connector run "google_bigquery" --action "list_jobs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
