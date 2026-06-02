# Google Analytics · `batch_run_reports`

Run up to five Google Analytics Data API reports in one batch request for a single property.

- **Service**: `google_analytics`
- **Action**: `batch_run_reports`
- **Action id**: `google_analytics.batch_run_reports`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "batch_run_reports"
```

## Run

```bash
oo connector run "google_analytics" --action "batch_run_reports" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
