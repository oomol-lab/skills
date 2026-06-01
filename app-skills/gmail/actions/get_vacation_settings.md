# Gmail · `get_vacation_settings`

Get the Gmail vacation responder settings, including whether auto-replies are enabled and their current content.

- **Service**: `gmail`
- **Action**: `get_vacation_settings`
- **Action id**: `gmail.get_vacation_settings`
- **Required scopes**: gmail.settings

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "get_vacation_settings"
```

## Run

```bash
oo connector run "gmail" --action "get_vacation_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
