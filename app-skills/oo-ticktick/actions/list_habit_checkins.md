# TickTick · `list_habit_checkins`

List TickTick habit check-ins for one or more habits over a date stamp range.

- **Service**: `ticktick`
- **Action**: `list_habit_checkins`
- **Action id**: `ticktick.list_habit_checkins`
- **Required scopes**: ticktick.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "list_habit_checkins"
```

## Run

```bash
oo connector run "ticktick" --action "list_habit_checkins" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
