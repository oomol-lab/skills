# Google Analytics · `run_technology_report`

Run a Google Analytics technology report for device, browser, and operating system performance.

- **Service**: `google_analytics`
- **Action**: `run_technology_report`
- **Action id**: `google_analytics.run_technology_report`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "run_technology_report"
```

## Run

```bash
oo connector run "google_analytics" --action "run_technology_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
