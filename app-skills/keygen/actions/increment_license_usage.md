# Keygen · `increment_license_usage`

Increment metered usage for a Keygen license.

- **Service**: `keygen`
- **Action**: `increment_license_usage`
- **Action id**: `keygen.increment_license_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "increment_license_usage"
```

## Run

```bash
oo connector run "keygen" --action "increment_license_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
