# Google BigQuery · `query`

Run a BigQuery SQL query and return the first page of results.

- **Service**: `google_bigquery`
- **Action**: `query`
- **Action id**: `google_bigquery.query`
- **Required scopes**: google_bigquery.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "query"
```

## Run

```bash
oo connector run "google_bigquery" --action "query" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
