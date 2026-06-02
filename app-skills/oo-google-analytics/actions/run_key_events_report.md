# Google Analytics · `run_key_events_report`

Run a Google Analytics key events report for key event volume and conversion rates.

- **Service**: `google_analytics`
- **Action**: `run_key_events_report`
- **Action id**: `google_analytics.run_key_events_report`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "run_key_events_report"
```

## Run

```bash
oo connector run "google_analytics" --action "run_key_events_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
