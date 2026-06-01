# Google BigQuery · `update_dataset`

Replace BigQuery dataset metadata with the supplied dataset resource fields.

- **Service**: `google_bigquery`
- **Action**: `update_dataset`
- **Action id**: `google_bigquery.update_dataset`
- **Required scopes**: google_bigquery.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "update_dataset"
```

## Run

```bash
oo connector run "google_bigquery" --action "update_dataset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google BigQuery state. Confirm the exact payload and intended effect with the user before running.
