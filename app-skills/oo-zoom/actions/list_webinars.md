# Zoom · `list_webinars`

List scheduled webinars for a Zoom user using official pagination.

- **Service**: `zoom`
- **Action**: `list_webinars`
- **Action id**: `zoom.list_webinars`
- **Required scopes**: webinar:read:list_webinars:admin

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zoom" --action "list_webinars"
```

## Run

```bash
oo connector run "zoom" --action "list_webinars" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
