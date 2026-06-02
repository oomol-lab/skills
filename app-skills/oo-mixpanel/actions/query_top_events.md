# Mixpanel · `query_top_events`

Get today's top Mixpanel events with counts and percent change from yesterday.

- **Service**: `mixpanel`
- **Action**: `query_top_events`
- **Action id**: `mixpanel.query_top_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mixpanel" --action "query_top_events"
```

## Run

```bash
oo connector run "mixpanel" --action "query_top_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
