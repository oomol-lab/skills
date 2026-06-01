# Cal.com · `retrieve_event_type_by_id`

Compatibility alias for Composio's retrieve-event-type-by-id action. Gets a single Cal.com event type by ID.

- **Service**: `cal`
- **Action**: `retrieve_event_type_by_id`
- **Action id**: `cal.retrieve_event_type_by_id`
- **Required scopes**: cal.event_types.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "retrieve_event_type_by_id"
```

## Run

```bash
oo connector run "cal" --action "retrieve_event_type_by_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
