# Calendly · `get_invitee_no_show`

Retrieve one Calendly invitee no-show by no-show URI.

- **Service**: `calendly`
- **Action**: `get_invitee_no_show`
- **Action id**: `calendly.get_invitee_no_show`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "get_invitee_no_show"
```

## Run

```bash
oo connector run "calendly" --action "get_invitee_no_show" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
