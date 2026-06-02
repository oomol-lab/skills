# Google Calendar · `delete_event`

Delete a Google Calendar event.

- **Service**: `googlecalendar`
- **Action**: `delete_event`
- **Action id**: `googlecalendar.delete_event`
- **Required scopes**: googlecalendar.events.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "delete_event"
```

## Run

```bash
oo connector run "googlecalendar" --action "delete_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Calendar data. Always confirm the target and get explicit user approval before running.
