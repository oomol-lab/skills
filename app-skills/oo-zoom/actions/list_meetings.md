# Zoom · `list_meetings`

List scheduled, live, upcoming, or previous meetings for a Zoom user using official pagination.

- **Service**: `zoom`
- **Action**: `list_meetings`
- **Action id**: `zoom.list_meetings`
- **Required scopes**: meeting:read:list_meetings:admin

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zoom" --action "list_meetings"
```

## Run

```bash
oo connector run "zoom" --action "list_meetings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
