# Keygen · `change_license_group`

Change the group assigned to a Keygen license.

- **Service**: `keygen`
- **Action**: `change_license_group`
- **Action id**: `keygen.change_license_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "change_license_group"
```

## Run

```bash
oo connector run "keygen" --action "change_license_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
