# Streamtime · `list_users`

List the Streamtime users available to the authenticated organisation.

- **Service**: `streamtime`
- **Action**: `list_users`
- **Action id**: `streamtime.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "streamtime" --action "list_users"
```

## Run

```bash
oo connector run "streamtime" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
