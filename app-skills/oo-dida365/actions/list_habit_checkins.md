# Dida365 · `list_habit_checkins`

List Dida365 (滴答清单) habit check-ins for one or more habits over a date stamp range.

- **Service**: `dida365`
- **Action**: `list_habit_checkins`
- **Action id**: `dida365.list_habit_checkins`
- **Required scopes**: dida365.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "list_habit_checkins"
```

## Run

```bash
oo connector run "dida365" --action "list_habit_checkins" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
