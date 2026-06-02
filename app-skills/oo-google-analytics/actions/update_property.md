# Google Analytics · `update_property`

Update Google Analytics property settings such as display name, industry category, time zone, or currency.

- **Service**: `google_analytics`
- **Action**: `update_property`
- **Action id**: `google_analytics.update_property`
- **Required scopes**: google_analytics.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "update_property"
```

## Run

```bash
oo connector run "google_analytics" --action "update_property" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Analytics state. Confirm the exact payload and intended effect with the user before running.
