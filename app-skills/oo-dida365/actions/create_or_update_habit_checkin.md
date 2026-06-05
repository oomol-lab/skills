# Dida365 · `create_or_update_habit_checkin`

Create or update a Dida365 (滴答清单) habit check-in for a date stamp.

- **Service**: `dida365`
- **Action**: `create_or_update_habit_checkin`
- **Action id**: `dida365.create_or_update_habit_checkin`
- **Required scopes**: dida365.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "create_or_update_habit_checkin"
```

## Run

```bash
oo connector run "dida365" --action "create_or_update_habit_checkin" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Dida365 state. Confirm the exact payload and intended effect with the user before running.
