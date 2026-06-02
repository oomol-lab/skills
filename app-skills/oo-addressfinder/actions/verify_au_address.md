# Addressfinder · `verify_au_address`

Verify and enrich an Australian address with Addressfinder address verification.

- **Service**: `addressfinder`
- **Action**: `verify_au_address`
- **Action id**: `addressfinder.verify_au_address`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "addressfinder" --action "verify_au_address"
```

## Run

```bash
oo connector run "addressfinder" --action "verify_au_address" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
