# Calendly · `create_invitee_no_show`

Mark one Calendly invitee as a no-show by invitee URI.

- **Service**: `calendly`
- **Action**: `create_invitee_no_show`
- **Action id**: `calendly.create_invitee_no_show`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "create_invitee_no_show"
```

## Run

```bash
oo connector run "calendly" --action "create_invitee_no_show" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Calendly state. Confirm the exact payload and intended effect with the user before running.
