# Cal.com · `update_schedule_by_id`

Compatibility alias for Composio's update-schedule-by-id action. Updates a schedule.

- **Service**: `cal`
- **Action**: `update_schedule_by_id`
- **Action id**: `cal.update_schedule_by_id`
- **Required scopes**: cal.schedules.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "update_schedule_by_id"
```

## Run

```bash
oo connector run "cal" --action "update_schedule_by_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cal.com state. Confirm the exact payload and intended effect with the user before running.
