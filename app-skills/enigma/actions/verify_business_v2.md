# Enigma · `verify_business_v2`

Verify a business with Enigma's KYB v2 API, returning a normalized risk summary and the raw verification payload.

- **Service**: `enigma`
- **Action**: `verify_business_v2`
- **Action id**: `enigma.verify_business_v2`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "enigma" --action "verify_business_v2"
```

## Run

```bash
oo connector run "enigma" --action "verify_business_v2" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
