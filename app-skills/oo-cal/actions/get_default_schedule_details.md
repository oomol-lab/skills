# Cal.com · `get_default_schedule_details`

Compatibility alias for Composio's get-default-schedule-details action. Returns the default schedule for the authenticated user.

- **Service**: `cal`
- **Action**: `get_default_schedule_details`
- **Action id**: `cal.get_default_schedule_details`
- **Required scopes**: cal.schedules.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "get_default_schedule_details"
```

## Run

```bash
oo connector run "cal" --action "get_default_schedule_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cal.com state. Confirm the exact payload and intended effect with the user before running.
