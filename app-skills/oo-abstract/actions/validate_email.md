# Abstract · `validate_email`

Validate an email address with Abstract Email Validation and return deliverability, quality, and risk checks.

- **Service**: `abstract`
- **Action**: `validate_email`
- **Action id**: `abstract.validate_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "abstract" --action "validate_email"
```

## Run

```bash
oo connector run "abstract" --action "validate_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
