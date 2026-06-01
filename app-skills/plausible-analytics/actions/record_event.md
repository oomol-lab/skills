# Plausible Analytics · `record_event`

Record a pageview or custom event through the Plausible Events API for server-side or app tracking.

- **Service**: `plausible_analytics`
- **Action**: `record_event`
- **Action id**: `plausible_analytics.record_event`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "plausible_analytics" --action "record_event"
```

## Run

```bash
oo connector run "plausible_analytics" --action "record_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
