# Google BigQuery · `insert_all`

Insert a small batch of rows into a BigQuery table.

- **Service**: `google_bigquery`
- **Action**: `insert_all`
- **Action id**: `google_bigquery.insert_all`
- **Required scopes**: google_bigquery.insert_data

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "insert_all"
```

## Run

```bash
oo connector run "google_bigquery" --action "insert_all" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google BigQuery state. Confirm the exact payload and intended effect with the user before running.
