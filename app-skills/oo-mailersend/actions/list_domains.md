# MailerSend · `list_domains`

List MailerSend domains available to the current API token.

- **Service**: `mailersend`
- **Action**: `list_domains`
- **Action id**: `mailersend.list_domains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailersend" --action "list_domains"
```

## Run

```bash
oo connector run "mailersend" --action "list_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
