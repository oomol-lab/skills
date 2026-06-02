# MailerLite · `list_groups`

List groups available to the current MailerLite API key.

- **Service**: `mailerlite`
- **Action**: `list_groups`
- **Action id**: `mailerlite.list_groups`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailerlite" --action "list_groups"
```

## Run

```bash
oo connector run "mailerlite" --action "list_groups" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
