# SMS Alert · `validate_otp`

Validate an OTP code previously generated through SMS Alert.

- **Service**: `sms_alert`
- **Action**: `validate_otp`
- **Action id**: `sms_alert.validate_otp`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sms_alert" --action "validate_otp"
```

## Run

```bash
oo connector run "sms_alert" --action "validate_otp" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
