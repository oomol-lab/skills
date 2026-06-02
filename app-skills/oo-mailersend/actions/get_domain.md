# MailerSend · `get_domain`

Get a single MailerSend domain by ID.

- **Service**: `mailersend`
- **Action**: `get_domain`
- **Action id**: `mailersend.get_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailersend" --action "get_domain"
```

## Run

```bash
oo connector run "mailersend" --action "get_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
