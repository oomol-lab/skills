# Calendly · `delete_invitee_no_show`

Delete one Calendly invitee no-show by no-show URI.

- **Service**: `calendly`
- **Action**: `delete_invitee_no_show`
- **Action id**: `calendly.delete_invitee_no_show`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "delete_invitee_no_show"
```

## Run

```bash
oo connector run "calendly" --action "delete_invitee_no_show" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Calendly data. Always confirm the target and get explicit user approval before running.
