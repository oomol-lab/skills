# Cal.com · `create_user_availability_schedule`

Compatibility alias for Composio's create-user-availability-schedule action. Creates a schedule.

- **Service**: `cal`
- **Action**: `create_user_availability_schedule`
- **Action id**: `cal.create_user_availability_schedule`
- **Required scopes**: cal.schedules.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "create_user_availability_schedule"
```

## Run

```bash
oo connector run "cal" --action "create_user_availability_schedule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cal.com state. Confirm the exact payload and intended effect with the user before running.
