# Cal.com · `get_event_type`

Get a single Cal.com event type by its numeric ID.

- **Service**: `cal`
- **Action**: `get_event_type`
- **Action id**: `cal.get_event_type`
- **Required scopes**: cal.event_types.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "get_event_type"
```

## Run

```bash
oo connector run "cal" --action "get_event_type" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
