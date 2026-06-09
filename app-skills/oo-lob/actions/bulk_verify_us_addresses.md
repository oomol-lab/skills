# Lob · `bulk_verify_us_addresses`

Verify and standardize multiple US addresses with Lob Address Verification.

- **Service**: `lob`
- **Action**: `bulk_verify_us_addresses`
- **Action id**: `lob.bulk_verify_us_addresses`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lob" --action "bulk_verify_us_addresses"
```

## Run

```bash
oo connector run "lob" --action "bulk_verify_us_addresses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
