# MailerLite · `list_subscribers`

List subscribers available to the current MailerLite API key.

- **Service**: `mailerlite`
- **Action**: `list_subscribers`
- **Action id**: `mailerlite.list_subscribers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailerlite" --action "list_subscribers"
```

## Run

```bash
oo connector run "mailerlite" --action "list_subscribers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
