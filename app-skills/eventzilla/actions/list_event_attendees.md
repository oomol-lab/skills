# Eventzilla · `list_event_attendees`

List Eventzilla attendees for one event.

- **Service**: `eventzilla`
- **Action**: `list_event_attendees`
- **Action id**: `eventzilla.list_event_attendees`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eventzilla" --action "list_event_attendees"
```

## Run

```bash
oo connector run "eventzilla" --action "list_event_attendees" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
