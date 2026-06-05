# Userflow · `track_event`

Track one Userflow event for a user.

- **Service**: `userflow`
- **Action**: `track_event`
- **Action id**: `userflow.track_event`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "userflow" --action "track_event"
```

## Run

```bash
oo connector run "userflow" --action "track_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
