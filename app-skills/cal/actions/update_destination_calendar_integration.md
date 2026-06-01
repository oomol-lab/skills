# Cal.com · `update_destination_calendar_integration`

Compatibility alias for Composio's update-destination-calendar-integration action. Updates the destination calendar used for created events.

- **Service**: `cal`
- **Action**: `update_destination_calendar_integration`
- **Action id**: `cal.update_destination_calendar_integration`
- **Required scopes**: cal.schedules.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "update_destination_calendar_integration"
```

## Run

```bash
oo connector run "cal" --action "update_destination_calendar_integration" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cal.com state. Confirm the exact payload and intended effect with the user before running.
