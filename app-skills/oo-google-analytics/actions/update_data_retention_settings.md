# Google Analytics · `update_data_retention_settings`

Update Google Analytics property data retention settings for event data and user activity reset behavior.

- **Service**: `google_analytics`
- **Action**: `update_data_retention_settings`
- **Action id**: `google_analytics.update_data_retention_settings`
- **Required scopes**: google_analytics.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "update_data_retention_settings"
```

## Run

```bash
oo connector run "google_analytics" --action "update_data_retention_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Analytics state. Confirm the exact payload and intended effect with the user before running.
