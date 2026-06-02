# Google BigQuery · `patch_model`

Patch BigQuery ML model metadata such as friendly name, description, or labels.

- **Service**: `google_bigquery`
- **Action**: `patch_model`
- **Action id**: `google_bigquery.patch_model`
- **Required scopes**: google_bigquery.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_bigquery" --action "patch_model"
```

## Run

```bash
oo connector run "google_bigquery" --action "patch_model" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google BigQuery state. Confirm the exact payload and intended effect with the user before running.
