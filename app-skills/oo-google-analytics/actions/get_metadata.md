# Google Analytics · `get_metadata`

Get available dimensions and metrics for a Google Analytics property before building reports.

- **Service**: `google_analytics`
- **Action**: `get_metadata`
- **Action id**: `google_analytics.get_metadata`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "get_metadata"
```

## Run

```bash
oo connector run "google_analytics" --action "get_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
