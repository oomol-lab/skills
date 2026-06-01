# Zoom · `list_webinar_participants`

List participants who attended a past Zoom webinar using official pagination.

- **Service**: `zoom`
- **Action**: `list_webinar_participants`
- **Action id**: `zoom.list_webinar_participants`
- **Required scopes**: webinar:read:list_past_participants:admin

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zoom" --action "list_webinar_participants"
```

## Run

```bash
oo connector run "zoom" --action "list_webinar_participants" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
