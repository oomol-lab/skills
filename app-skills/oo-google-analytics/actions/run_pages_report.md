# Google Analytics · `run_pages_report`

Run a Google Analytics pages report for page views, users, sessions, and engagement.

- **Service**: `google_analytics`
- **Action**: `run_pages_report`
- **Action id**: `google_analytics.run_pages_report`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "run_pages_report"
```

## Run

```bash
oo connector run "google_analytics" --action "run_pages_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
