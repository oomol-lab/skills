# Google Analytics · `create_custom_metric`

Create a Google Analytics custom metric so reports can measure business-specific event values.

- **Service**: `google_analytics`
- **Action**: `create_custom_metric`
- **Action id**: `google_analytics.create_custom_metric`
- **Required scopes**: google_analytics.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "create_custom_metric"
```

## Run

```bash
oo connector run "google_analytics" --action "create_custom_metric" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Analytics state. Confirm the exact payload and intended effect with the user before running.
