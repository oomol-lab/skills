# Google BigQuery · `get_routine`

Retrieve BigQuery routine metadata.

- **Service**: `google_bigquery`
- **Action**: `get_routine`
- **Action id**: `google_bigquery.get_routine`
- **Required scopes**: google_bigquery.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "get_routine"
```

## Run

```bash
oo connector run "google_bigquery" --action "get_routine" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
