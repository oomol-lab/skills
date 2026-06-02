# Mailboxlayer · `check_email`

Validate a single email address and return Mailboxlayer quality signals.

- **Service**: `mailboxlayer`
- **Action**: `check_email`
- **Action id**: `mailboxlayer.check_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailboxlayer" --action "check_email"
```

## Run

```bash
oo connector run "mailboxlayer" --action "check_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
