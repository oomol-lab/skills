# Google Analytics · `list_data_streams`

List data streams configured on a Google Analytics property.

- **Service**: `google_analytics`
- **Action**: `list_data_streams`
- **Action id**: `google_analytics.list_data_streams`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "list_data_streams"
```

## Run

```bash
oo connector run "google_analytics" --action "list_data_streams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
