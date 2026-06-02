# Google Calendar · `patch_event`

Patch writable fields on a Google Calendar event.

- **Service**: `googlecalendar`
- **Action**: `patch_event`
- **Action id**: `googlecalendar.patch_event`
- **Required scopes**: googlecalendar.events.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "patch_event"
```

## Run

```bash
oo connector run "googlecalendar" --action "patch_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Calendar state. Confirm the exact payload and intended effect with the user before running.
