# Keygen · `validate_license_key`

Validate a Keygen license key and optional validation scope.

- **Service**: `keygen`
- **Action**: `validate_license_key`
- **Action id**: `keygen.validate_license_key`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "validate_license_key"
```

## Run

```bash
oo connector run "keygen" --action "validate_license_key" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
