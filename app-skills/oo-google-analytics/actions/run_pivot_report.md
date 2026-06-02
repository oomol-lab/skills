# Google Analytics · `run_pivot_report`

Run a Google Analytics Data API pivot report for cross-tabbed reporting views.

- **Service**: `google_analytics`
- **Action**: `run_pivot_report`
- **Action id**: `google_analytics.run_pivot_report`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "run_pivot_report"
```

## Run

```bash
oo connector run "google_analytics" --action "run_pivot_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
