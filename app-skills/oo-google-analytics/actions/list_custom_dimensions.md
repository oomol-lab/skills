# Google Analytics · `list_custom_dimensions`

List custom dimensions configured on a Google Analytics property.

- **Service**: `google_analytics`
- **Action**: `list_custom_dimensions`
- **Action id**: `google_analytics.list_custom_dimensions`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "list_custom_dimensions"
```

## Run

```bash
oo connector run "google_analytics" --action "list_custom_dimensions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
