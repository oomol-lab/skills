# TickTick · `create_or_update_habit_checkin`

Create or update a TickTick habit check-in for a date stamp.

- **Service**: `ticktick`
- **Action**: `create_or_update_habit_checkin`
- **Action id**: `ticktick.create_or_update_habit_checkin`
- **Required scopes**: ticktick.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "create_or_update_habit_checkin"
```

## Run

```bash
oo connector run "ticktick" --action "create_or_update_habit_checkin" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TickTick state. Confirm the exact payload and intended effect with the user before running.
