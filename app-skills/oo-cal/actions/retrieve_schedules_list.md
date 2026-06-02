# Cal.com · `retrieve_schedules_list`

Compatibility alias for Composio's retrieve-schedules-list action. Lists schedules for the authenticated user.

- **Service**: `cal`
- **Action**: `retrieve_schedules_list`
- **Action id**: `cal.retrieve_schedules_list`
- **Required scopes**: cal.schedules.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "retrieve_schedules_list"
```

## Run

```bash
oo connector run "cal" --action "retrieve_schedules_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
