# Keygen · `reset_license_usage`

Reset metered usage for a Keygen license.

- **Service**: `keygen`
- **Action**: `reset_license_usage`
- **Action id**: `keygen.reset_license_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "reset_license_usage"
```

## Run

```bash
oo connector run "keygen" --action "reset_license_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
