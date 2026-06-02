# Google Calendar · `sync_events`

Incrementally sync events from a Google Calendar.

- **Service**: `googlecalendar`
- **Action**: `sync_events`
- **Action id**: `googlecalendar.sync_events`
- **Required scopes**: googlecalendar.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "sync_events"
```

## Run

```bash
oo connector run "googlecalendar" --action "sync_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Calendar state. Confirm the exact payload and intended effect with the user before running.
