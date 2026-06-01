# Intercom · `list_admins`

List Intercom admins for the current workspace.

- **Service**: `intercom`
- **Action**: `list_admins`
- **Action id**: `intercom.list_admins`
- **Required scopes**: intercom.admins.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "intercom" --action "list_admins"
```

## Run

```bash
oo connector run "intercom" --action "list_admins" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
