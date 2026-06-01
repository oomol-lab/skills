# Emailable · `verify_email`

Verify a single email address and return Emailable deliverability signals.

- **Service**: `emailable`
- **Action**: `verify_email`
- **Action id**: `emailable.verify_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emailable" --action "verify_email"
```

## Run

```bash
oo connector run "emailable" --action "verify_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
