# Mails · `validate_email`

Validate one email address with the Mails single validation endpoint.

- **Service**: `mails_so`
- **Action**: `validate_email`
- **Action id**: `mails_so.validate_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mails_so" --action "validate_email"
```

## Run

```bash
oo connector run "mails_so" --action "validate_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
