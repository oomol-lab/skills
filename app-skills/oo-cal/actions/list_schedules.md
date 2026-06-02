# Cal.com · `list_schedules`

List schedules available to the authenticated Cal.com user.

- **Service**: `cal`
- **Action**: `list_schedules`
- **Action id**: `cal.list_schedules`
- **Required scopes**: cal.schedules.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "list_schedules"
```

## Run

```bash
oo connector run "cal" --action "list_schedules" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
