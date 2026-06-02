# Outlook · `update_mailbox_settings`

Update Outlook mailbox settings such as automatic replies, locale, time zone, working hours, and date or time formatting.

- **Service**: `outlook`
- **Action**: `update_mailbox_settings`
- **Action id**: `outlook.update_mailbox_settings`
- **Required scopes**: outlook.settings.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outlook" --action "update_mailbox_settings"
```

## Run

```bash
oo connector run "outlook" --action "update_mailbox_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Outlook state. Confirm the exact payload and intended effect with the user before running.
