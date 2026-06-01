# RealPhoneValidation · `validate_phone_standard`

Validate one 10-digit phone number with the RealPhoneValidation Turbo Standard endpoint.

- **Service**: `realphonevalidation`
- **Action**: `validate_phone_standard`
- **Action id**: `realphonevalidation.validate_phone_standard`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "realphonevalidation" --action "validate_phone_standard"
```

## Run

```bash
oo connector run "realphonevalidation" --action "validate_phone_standard" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
