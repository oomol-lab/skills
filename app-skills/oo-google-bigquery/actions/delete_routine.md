# Google BigQuery · `delete_routine`

Delete a BigQuery routine from a dataset.

- **Service**: `google_bigquery`
- **Action**: `delete_routine`
- **Action id**: `google_bigquery.delete_routine`
- **Required scopes**: google_bigquery.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "delete_routine"
```

## Run

```bash
oo connector run "google_bigquery" --action "delete_routine" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google BigQuery data. Always confirm the target and get explicit user approval before running.
