# IPQualityScore · `validate_email`

Validate an email address and return deliverability and abuse risk signals.

- **Service**: `ipqualityscore`
- **Action**: `validate_email`
- **Action id**: `ipqualityscore.validate_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipqualityscore" --action "validate_email"
```

## Run

```bash
oo connector run "ipqualityscore" --action "validate_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
