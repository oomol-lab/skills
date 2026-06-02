# Google BigQuery · `list_models`

List BigQuery ML models in a dataset.

- **Service**: `google_bigquery`
- **Action**: `list_models`
- **Action id**: `google_bigquery.list_models`
- **Required scopes**: google_bigquery.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "list_models"
```

## Run

```bash
oo connector run "google_bigquery" --action "list_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
