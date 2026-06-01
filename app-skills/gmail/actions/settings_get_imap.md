# Gmail · `settings_get_imap`

Get the Gmail IMAP settings, including whether IMAP is enabled and how expunge or folder size settings are configured.

- **Service**: `gmail`
- **Action**: `settings_get_imap`
- **Action id**: `gmail.settings_get_imap`
- **Required scopes**: gmail.settings

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "settings_get_imap"
```

## Run

```bash
oo connector run "gmail" --action "settings_get_imap" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
