# Google Analytics · `list_properties`

List Google Analytics properties visible to the connected account as user-selectable options. Use this first when the user does not know their GA4 propertyId.

- **Service**: `google_analytics`
- **Action**: `list_properties`
- **Action id**: `google_analytics.list_properties`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "list_properties"
```

## Run

```bash
oo connector run "google_analytics" --action "list_properties" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
