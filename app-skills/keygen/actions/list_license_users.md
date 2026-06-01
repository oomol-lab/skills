# Keygen · `list_license_users`

List users attached to a Keygen license.

- **Service**: `keygen`
- **Action**: `list_license_users`
- **Action id**: `keygen.list_license_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "list_license_users"
```

## Run

```bash
oo connector run "keygen" --action "list_license_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
