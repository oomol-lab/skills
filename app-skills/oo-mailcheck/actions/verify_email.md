# Mailcheck · `verify_email`

Validate a single email address and return UserCheck deliverability and risk signals.

- **Service**: `mailcheck`
- **Action**: `verify_email`
- **Action id**: `mailcheck.verify_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailcheck" --action "verify_email"
```

## Run

```bash
oo connector run "mailcheck" --action "verify_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
