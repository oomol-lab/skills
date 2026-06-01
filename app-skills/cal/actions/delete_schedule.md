# Cal.com · `delete_schedule`

Delete a schedule for the authenticated Cal.com user.

- **Service**: `cal`
- **Action**: `delete_schedule`
- **Action id**: `cal.delete_schedule`
- **Required scopes**: cal.schedules.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "delete_schedule"
```

## Run

```bash
oo connector run "cal" --action "delete_schedule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Cal.com data. Always confirm the target and get explicit user approval before running.
