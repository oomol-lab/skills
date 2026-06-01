# Keygen · `decrement_license_usage`

Decrement metered usage for a Keygen license.

- **Service**: `keygen`
- **Action**: `decrement_license_usage`
- **Action id**: `keygen.decrement_license_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "decrement_license_usage"
```

## Run

```bash
oo connector run "keygen" --action "decrement_license_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
