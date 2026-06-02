# Calendly · `create_event_invitee`

Create one Calendly invitee booking for a confirmed available start time.

- **Service**: `calendly`
- **Action**: `create_event_invitee`
- **Action id**: `calendly.create_event_invitee`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "create_event_invitee"
```

## Run

```bash
oo connector run "calendly" --action "create_event_invitee" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Calendly state. Confirm the exact payload and intended effect with the user before running.
