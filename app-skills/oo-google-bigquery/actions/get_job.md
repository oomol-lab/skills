# Google BigQuery · `get_job`

Retrieve BigQuery job metadata.

- **Service**: `google_bigquery`
- **Action**: `get_job`
- **Action id**: `google_bigquery.get_job`
- **Required scopes**: google_bigquery.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "get_job"
```

## Run

```bash
oo connector run "google_bigquery" --action "get_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
