# IPQualityScore · `validate_phone`

Validate a phone number and return carrier, activity, and risk signals.

- **Service**: `ipqualityscore`
- **Action**: `validate_phone`
- **Action id**: `ipqualityscore.validate_phone`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipqualityscore" --action "validate_phone"
```

## Run

```bash
oo connector run "ipqualityscore" --action "validate_phone" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
