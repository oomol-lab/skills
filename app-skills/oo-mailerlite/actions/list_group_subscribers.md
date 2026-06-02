# MailerLite · `list_group_subscribers`

List subscribers that belong to a MailerLite group.

- **Service**: `mailerlite`
- **Action**: `list_group_subscribers`
- **Action id**: `mailerlite.list_group_subscribers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailerlite" --action "list_group_subscribers"
```

## Run

```bash
oo connector run "mailerlite" --action "list_group_subscribers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
