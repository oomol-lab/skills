# Google BigQuery · `create_routine`

Create a BigQuery routine such as a user-defined function or stored procedure.

- **Service**: `google_bigquery`
- **Action**: `create_routine`
- **Action id**: `google_bigquery.create_routine`
- **Required scopes**: google_bigquery.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "create_routine"
```

## Run

```bash
oo connector run "google_bigquery" --action "create_routine" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google BigQuery state. Confirm the exact payload and intended effect with the user before running.
