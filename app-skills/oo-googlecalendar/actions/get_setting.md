# Google Calendar · `get_setting`

Fetch one Google Calendar setting.

- **Service**: `googlecalendar`
- **Action**: `get_setting`
- **Action id**: `googlecalendar.get_setting`
- **Required scopes**: googlecalendar.settings.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "get_setting"
```

## Run

```bash
oo connector run "googlecalendar" --action "get_setting" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
