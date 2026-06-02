# Google Analytics · `run_events_report`

Run a Google Analytics events report for event volume, users, key events, and value.

- **Service**: `google_analytics`
- **Action**: `run_events_report`
- **Action id**: `google_analytics.run_events_report`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "run_events_report"
```

## Run

```bash
oo connector run "google_analytics" --action "run_events_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
