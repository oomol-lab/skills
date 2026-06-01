# Mailgun · `get_domain`

Get Mailgun domain details including DNS records and sending state.

- **Service**: `mailgun`
- **Action**: `get_domain`
- **Action id**: `mailgun.get_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "get_domain"
```

## Run

```bash
oo connector run "mailgun" --action "get_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
