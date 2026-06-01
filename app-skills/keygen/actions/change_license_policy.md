# Keygen · `change_license_policy`

Move a Keygen license to another policy.

- **Service**: `keygen`
- **Action**: `change_license_policy`
- **Action id**: `keygen.change_license_policy`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "change_license_policy"
```

## Run

```bash
oo connector run "keygen" --action "change_license_policy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
