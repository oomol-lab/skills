# Outlook · `get_mailbox_settings`

Get the current Outlook mailbox settings, including automatic replies, locale, time zone, and working hours.

- **Service**: `outlook`
- **Action**: `get_mailbox_settings`
- **Action id**: `outlook.get_mailbox_settings`
- **Required scopes**: outlook.settings.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outlook" --action "get_mailbox_settings"
```

## Run

```bash
oo connector run "outlook" --action "get_mailbox_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
