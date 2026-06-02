# TaxJar · `validate_vat_number`

Validate a VAT identification number with TaxJar.

- **Service**: `taxjar`
- **Action**: `validate_vat_number`
- **Action id**: `taxjar.validate_vat_number`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "taxjar" --action "validate_vat_number"
```

## Run

```bash
oo connector run "taxjar" --action "validate_vat_number" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
