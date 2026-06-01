# Intercom · `get_admin`

Get a single Intercom admin by identifier.

- **Service**: `intercom`
- **Action**: `get_admin`
- **Action id**: `intercom.get_admin`
- **Required scopes**: intercom.admins.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "intercom" --action "get_admin"
```

## Run

```bash
oo connector run "intercom" --action "get_admin" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
