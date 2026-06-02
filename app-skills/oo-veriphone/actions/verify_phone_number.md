# Veriphone · `verify_phone_number`

Verify whether a phone number is valid and return its carrier and region data.

- **Service**: `veriphone`
- **Action**: `verify_phone_number`
- **Action id**: `veriphone.verify_phone_number`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "veriphone" --action "verify_phone_number"
```

## Run

```bash
oo connector run "veriphone" --action "verify_phone_number" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
