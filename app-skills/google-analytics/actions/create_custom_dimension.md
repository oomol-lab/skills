# Google Analytics · `create_custom_dimension`

Create a Google Analytics custom dimension so reporting can use a business-specific event, user, or item attribute.

- **Service**: `google_analytics`
- **Action**: `create_custom_dimension`
- **Action id**: `google_analytics.create_custom_dimension`
- **Required scopes**: google_analytics.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "create_custom_dimension"
```

## Run

```bash
oo connector run "google_analytics" --action "create_custom_dimension" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Analytics state. Confirm the exact payload and intended effect with the user before running.
