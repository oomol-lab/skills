# Google BigQuery · `list_datasets`

List BigQuery datasets in a Google Cloud project.

- **Service**: `google_bigquery`
- **Action**: `list_datasets`
- **Action id**: `google_bigquery.list_datasets`
- **Required scopes**: google_bigquery.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "list_datasets"
```

## Run

```bash
oo connector run "google_bigquery" --action "list_datasets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
