# Google Calendar · `import_event`

Import an event into Google Calendar without conferenceData or attachments.

- **Service**: `googlecalendar`
- **Action**: `import_event`
- **Action id**: `googlecalendar.import_event`
- **Required scopes**: googlecalendar.events.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "import_event"
```

## Run

```bash
oo connector run "googlecalendar" --action "import_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Calendar state. Confirm the exact payload and intended effect with the user before running.
