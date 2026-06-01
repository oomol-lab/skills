# Google BigQuery · `get_model`

Retrieve BigQuery ML model metadata.

- **Service**: `google_bigquery`
- **Action**: `get_model`
- **Action id**: `google_bigquery.get_model`
- **Required scopes**: google_bigquery.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "get_model"
```

## Run

```bash
oo connector run "google_bigquery" --action "get_model" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
