# Cal.com · `list_event_types`

List Cal.com event types for the authenticated user with optional pagination and status filters.

- **Service**: `cal`
- **Action**: `list_event_types`
- **Action id**: `cal.list_event_types`
- **Required scopes**: cal.event_types.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "list_event_types"
```

## Run

```bash
oo connector run "cal" --action "list_event_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
