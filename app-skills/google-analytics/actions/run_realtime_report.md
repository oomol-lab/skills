# Google Analytics · `run_realtime_report`

Run a Google Analytics realtime report for currently active users and events.

- **Service**: `google_analytics`
- **Action**: `run_realtime_report`
- **Action id**: `google_analytics.run_realtime_report`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "run_realtime_report"
```

## Run

```bash
oo connector run "google_analytics" --action "run_realtime_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
