# SMS Alert · `generate_otp`

Generate and send an OTP message through SMS Alert.

- **Service**: `sms_alert`
- **Action**: `generate_otp`
- **Action id**: `sms_alert.generate_otp`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sms_alert" --action "generate_otp"
```

## Run

```bash
oo connector run "sms_alert" --action "generate_otp" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
