# Google Analytics · `batch_run_pivot_reports`

Run up to five Google Analytics Data API pivot reports in one batch request for a single property.

- **Service**: `google_analytics`
- **Action**: `batch_run_pivot_reports`
- **Action id**: `google_analytics.batch_run_pivot_reports`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "batch_run_pivot_reports"
```

## Run

```bash
oo connector run "google_analytics" --action "batch_run_pivot_reports" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
