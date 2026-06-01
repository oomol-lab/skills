# Google Calendar · `list_event_instances`

List instances of a recurring Google Calendar event.

- **Service**: `googlecalendar`
- **Action**: `list_event_instances`
- **Action id**: `googlecalendar.list_event_instances`
- **Required scopes**: googlecalendar.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "list_event_instances"
```

## Run

```bash
oo connector run "googlecalendar" --action "list_event_instances" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
