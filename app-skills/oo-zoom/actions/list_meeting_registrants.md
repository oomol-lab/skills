# Zoom · `list_meeting_registrants`

List registrants for a Zoom meeting using official pagination.

- **Service**: `zoom`
- **Action**: `list_meeting_registrants`
- **Action id**: `zoom.list_meeting_registrants`
- **Required scopes**: meeting:read:list_registrants:admin

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zoom" --action "list_meeting_registrants"
```

## Run

```bash
oo connector run "zoom" --action "list_meeting_registrants" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
