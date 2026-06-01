# Keygen · `attach_license_entitlements`

Attach entitlements to a Keygen license.

- **Service**: `keygen`
- **Action**: `attach_license_entitlements`
- **Action id**: `keygen.attach_license_entitlements`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "attach_license_entitlements"
```

## Run

```bash
oo connector run "keygen" --action "attach_license_entitlements" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
