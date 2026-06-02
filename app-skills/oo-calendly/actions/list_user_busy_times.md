# Calendly · `list_user_busy_times`

List busy time slots for one Calendly user within a 7-day window.

- **Service**: `calendly`
- **Action**: `list_user_busy_times`
- **Action id**: `calendly.list_user_busy_times`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "list_user_busy_times"
```

## Run

```bash
oo connector run "calendly" --action "list_user_busy_times" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
