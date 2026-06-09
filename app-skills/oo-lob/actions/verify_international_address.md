# Lob · `verify_international_address`

Verify and standardize one international address with Lob Address Verification.

- **Service**: `lob`
- **Action**: `verify_international_address`
- **Action id**: `lob.verify_international_address`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lob" --action "verify_international_address"
```

## Run

```bash
oo connector run "lob" --action "verify_international_address" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
