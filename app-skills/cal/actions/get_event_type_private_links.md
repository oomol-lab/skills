# Cal.com · `get_event_type_private_links`

List private links configured for a Cal.com event type.

- **Service**: `cal`
- **Action**: `get_event_type_private_links`
- **Action id**: `cal.get_event_type_private_links`
- **Required scopes**: cal.event_types.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "get_event_type_private_links"
```

## Run

```bash
oo connector run "cal" --action "get_event_type_private_links" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
