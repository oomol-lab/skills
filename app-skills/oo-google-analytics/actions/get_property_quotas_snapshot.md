# Google Analytics · `get_property_quotas_snapshot`

Get the Google Analytics Data API quota snapshot for a property without running a report.

- **Service**: `google_analytics`
- **Action**: `get_property_quotas_snapshot`
- **Action id**: `google_analytics.get_property_quotas_snapshot`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "get_property_quotas_snapshot"
```

## Run

```bash
oo connector run "google_analytics" --action "get_property_quotas_snapshot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
