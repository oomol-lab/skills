# Google BigQuery · `get_query_results`

Poll a BigQuery query job and return a page of results.

- **Service**: `google_bigquery`
- **Action**: `get_query_results`
- **Action id**: `google_bigquery.get_query_results`
- **Required scopes**: google_bigquery.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "get_query_results"
```

## Run

```bash
oo connector run "google_bigquery" --action "get_query_results" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
