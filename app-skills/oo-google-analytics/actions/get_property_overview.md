# Google Analytics · `get_property_overview`

Get the key setup details for a Google Analytics property before choosing reports.

- **Service**: `google_analytics`
- **Action**: `get_property_overview`
- **Action id**: `google_analytics.get_property_overview`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "get_property_overview"
```

## Run

```bash
oo connector run "google_analytics" --action "get_property_overview" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
