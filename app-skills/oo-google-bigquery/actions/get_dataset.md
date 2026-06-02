# Google BigQuery · `get_dataset`

Retrieve BigQuery dataset metadata.

- **Service**: `google_bigquery`
- **Action**: `get_dataset`
- **Action id**: `google_bigquery.get_dataset`
- **Required scopes**: google_bigquery.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "get_dataset"
```

## Run

```bash
oo connector run "google_bigquery" --action "get_dataset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
