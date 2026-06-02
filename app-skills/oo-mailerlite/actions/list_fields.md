# MailerLite · `list_fields`

List fields available to the current MailerLite API key.

- **Service**: `mailerlite`
- **Action**: `list_fields`
- **Action id**: `mailerlite.list_fields`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailerlite" --action "list_fields"
```

## Run

```bash
oo connector run "mailerlite" --action "list_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
