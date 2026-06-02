# Cal.com · `fetch_event_type_details`

Compatibility alias for Composio's fetch-event-type-details action. Gets a single Cal.com event type by ID.

- **Service**: `cal`
- **Action**: `fetch_event_type_details`
- **Action id**: `cal.fetch_event_type_details`
- **Required scopes**: cal.event_types.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "fetch_event_type_details"
```

## Run

```bash
oo connector run "cal" --action "fetch_event_type_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
