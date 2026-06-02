# Google BigQuery · `list_routines`

List BigQuery routines in a dataset.

- **Service**: `google_bigquery`
- **Action**: `list_routines`
- **Action id**: `google_bigquery.list_routines`
- **Required scopes**: google_bigquery.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "list_routines"
```

## Run

```bash
oo connector run "google_bigquery" --action "list_routines" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
