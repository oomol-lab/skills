# Outlook · `list_mail_folders`

List the root-level Outlook mail folders for the connected mailbox, with optional hidden folders and field selection.

- **Service**: `outlook`
- **Action**: `list_mail_folders`
- **Action id**: `outlook.list_mail_folders`
- **Required scopes**: outlook.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outlook" --action "list_mail_folders"
```

## Run

```bash
oo connector run "outlook" --action "list_mail_folders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
