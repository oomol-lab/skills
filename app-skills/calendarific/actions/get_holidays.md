# Calendarific · `get_holidays`

List Calendarific holidays for a given country and year with optional filters.

- **Service**: `calendarific`
- **Action**: `get_holidays`
- **Action id**: `calendarific.get_holidays`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendarific" --action "get_holidays"
```

## Run

```bash
oo connector run "calendarific" --action "get_holidays" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
