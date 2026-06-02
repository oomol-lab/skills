# Google Analytics · `list_properties_filtered`

List Google Analytics properties matching a known Admin API filter such as parent:accounts/123. Use list_properties first when the account or propertyId is unknown.

- **Service**: `google_analytics`
- **Action**: `list_properties_filtered`
- **Action id**: `google_analytics.list_properties_filtered`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "list_properties_filtered"
```

## Run

```bash
oo connector run "google_analytics" --action "list_properties_filtered" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
