# Google BigQuery · `get_table`

Retrieve BigQuery table metadata, including schema when available.

- **Service**: `google_bigquery`
- **Action**: `get_table`
- **Action id**: `google_bigquery.get_table`
- **Required scopes**: google_bigquery.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "get_table"
```

## Run

```bash
oo connector run "google_bigquery" --action "get_table" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
