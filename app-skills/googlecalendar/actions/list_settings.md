# Google Calendar · `list_settings`

List Google Calendar settings.

- **Service**: `googlecalendar`
- **Action**: `list_settings`
- **Action id**: `googlecalendar.list_settings`
- **Required scopes**: googlecalendar.settings.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "list_settings"
```

## Run

```bash
oo connector run "googlecalendar" --action "list_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
