# RealPhoneValidation · `validate_phone_v3`

Validate one 10-digit phone number with the RealPhoneValidation Turbo v3 endpoint and return caller enrichment fields when available.

- **Service**: `realphonevalidation`
- **Action**: `validate_phone_v3`
- **Action id**: `realphonevalidation.validate_phone_v3`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "realphonevalidation" --action "validate_phone_v3"
```

## Run

```bash
oo connector run "realphonevalidation" --action "validate_phone_v3" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
