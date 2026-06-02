# Cal.com · `update_schedule`

Update a schedule for the authenticated Cal.com user.

- **Service**: `cal`
- **Action**: `update_schedule`
- **Action id**: `cal.update_schedule`
- **Required scopes**: cal.schedules.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "update_schedule"
```

## Run

```bash
oo connector run "cal" --action "update_schedule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cal.com state. Confirm the exact payload and intended effect with the user before running.
