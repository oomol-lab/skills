# Google Address Validation · `validate_address`

Validate and standardize a postal address with Google Address Validation and return verdict, parsed address, and geocode details.

- **Service**: `google_address_validation`
- **Action**: `validate_address`
- **Action id**: `google_address_validation.validate_address`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_address_validation" --action "validate_address"
```

## Run

```bash
oo connector run "google_address_validation" --action "validate_address" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
