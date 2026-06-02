# Mixpanel · `profile_event_activity`

Get event activity for one or more Mixpanel profiles over a date range.

- **Service**: `mixpanel`
- **Action**: `profile_event_activity`
- **Action id**: `mixpanel.profile_event_activity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mixpanel" --action "profile_event_activity"
```

## Run

```bash
oo connector run "mixpanel" --action "profile_event_activity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
