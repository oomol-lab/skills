# Google Analytics · `archive_custom_metric`

Archive a Google Analytics custom metric that should no longer be available for reporting configuration.

- **Service**: `google_analytics`
- **Action**: `archive_custom_metric`
- **Action id**: `google_analytics.archive_custom_metric`
- **Required scopes**: google_analytics.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "archive_custom_metric"
```

## Run

```bash
oo connector run "google_analytics" --action "archive_custom_metric" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
