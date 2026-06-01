# Google Calendar · `remove_attendee`

Remove one attendee email from a Google Calendar event.

- **Service**: `googlecalendar`
- **Action**: `remove_attendee`
- **Action id**: `googlecalendar.remove_attendee`
- **Required scopes**: googlecalendar.events.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "remove_attendee"
```

## Run

```bash
oo connector run "googlecalendar" --action "remove_attendee" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Calendar data. Always confirm the target and get explicit user approval before running.
