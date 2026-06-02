# Google BigQuery · `list_projects`

List Google Cloud projects accessible to BigQuery.

- **Service**: `google_bigquery`
- **Action**: `list_projects`
- **Action id**: `google_bigquery.list_projects`
- **Required scopes**: google_bigquery.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "list_projects"
```

## Run

```bash
oo connector run "google_bigquery" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
