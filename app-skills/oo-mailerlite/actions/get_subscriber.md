# MailerLite · `get_subscriber`

Fetch a single MailerLite subscriber by ID or email.

- **Service**: `mailerlite`
- **Action**: `get_subscriber`
- **Action id**: `mailerlite.get_subscriber`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailerlite" --action "get_subscriber"
```

## Run

```bash
oo connector run "mailerlite" --action "get_subscriber" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
