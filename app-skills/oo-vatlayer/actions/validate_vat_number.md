# VATlayer · `validate_vat_number`

Validate a VAT number and return company information when vatlayer finds it.

- **Service**: `vatlayer`
- **Action**: `validate_vat_number`
- **Action id**: `vatlayer.validate_vat_number`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vatlayer" --action "validate_vat_number"
```

## Run

```bash
oo connector run "vatlayer" --action "validate_vat_number" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
