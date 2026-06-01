# Keygen · `validate_license_by_id`

Validate a Keygen license by its resource ID and optional validation scope.

- **Service**: `keygen`
- **Action**: `validate_license_by_id`
- **Action id**: `keygen.validate_license_by_id`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "validate_license_by_id"
```

## Run

```bash
oo connector run "keygen" --action "validate_license_by_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
