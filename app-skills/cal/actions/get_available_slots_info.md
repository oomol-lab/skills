# Cal.com · `get_available_slots_info`

Compatibility action for Composio's get-available-slots-info. Returns available slots for a user, team, or event type.

- **Service**: `cal`
- **Action**: `get_available_slots_info`
- **Action id**: `cal.get_available_slots_info`
- **Required scopes**: cal.schedules.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "get_available_slots_info"
```

## Run

```bash
oo connector run "cal" --action "get_available_slots_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
