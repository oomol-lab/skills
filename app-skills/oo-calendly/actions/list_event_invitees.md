# Calendly · `list_event_invitees`

List invitees for one Calendly scheduled event.

- **Service**: `calendly`
- **Action**: `list_event_invitees`
- **Action id**: `calendly.list_event_invitees`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "list_event_invitees"
```

## Run

```bash
oo connector run "calendly" --action "list_event_invitees" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
