# Mailgun · `verify_domain`

Ask Mailgun to verify DNS records for a sending domain.

- **Service**: `mailgun`
- **Action**: `verify_domain`
- **Action id**: `mailgun.verify_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "verify_domain"
```

## Run

```bash
oo connector run "mailgun" --action "verify_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
