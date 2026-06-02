# Calendly · `list_user_meeting_locations`

List the configured meeting locations for one Calendly user.

- **Service**: `calendly`
- **Action**: `list_user_meeting_locations`
- **Action id**: `calendly.list_user_meeting_locations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "list_user_meeting_locations"
```

## Run

```bash
oo connector run "calendly" --action "list_user_meeting_locations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
