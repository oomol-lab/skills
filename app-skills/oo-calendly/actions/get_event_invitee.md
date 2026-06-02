# Calendly · `get_event_invitee`

Retrieve one Calendly invitee by invitee URI.

- **Service**: `calendly`
- **Action**: `get_event_invitee`
- **Action id**: `calendly.get_event_invitee`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "get_event_invitee"
```

## Run

```bash
oo connector run "calendly" --action "get_event_invitee" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
