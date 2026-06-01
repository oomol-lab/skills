# Google Analytics · `check_compatibility`

Check whether selected Google Analytics dimensions and metrics can be queried together.

- **Service**: `google_analytics`
- **Action**: `check_compatibility`
- **Action id**: `google_analytics.check_compatibility`
- **Required scopes**: google_analytics.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_analytics" --action "check_compatibility"
```

## Run

```bash
oo connector run "google_analytics" --action "check_compatibility" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
