# Google Analytics · `run_geography_report`

Run a Google Analytics geography report for users, sessions, and key events by location.

- **Service**: `google_analytics`
- **Action**: `run_geography_report`
- **Action id**: `google_analytics.run_geography_report`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "run_geography_report"
```

## Run

```bash
oo connector run "google_analytics" --action "run_geography_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
