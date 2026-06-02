# Cal.com · `get_schedule`

Get a Cal.com schedule by numeric schedule ID.

- **Service**: `cal`
- **Action**: `get_schedule`
- **Action id**: `cal.get_schedule`
- **Required scopes**: cal.schedules.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "get_schedule"
```

## Run

```bash
oo connector run "cal" --action "get_schedule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cal.com state. Confirm the exact payload and intended effect with the user before running.
