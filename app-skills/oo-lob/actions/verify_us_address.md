# Lob · `verify_us_address`

Verify and standardize one US address with Lob Address Verification.

- **Service**: `lob`
- **Action**: `verify_us_address`
- **Action id**: `lob.verify_us_address`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lob" --action "verify_us_address"
```

## Run

```bash
oo connector run "lob" --action "verify_us_address" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
