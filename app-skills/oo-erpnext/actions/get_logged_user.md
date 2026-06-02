# ERPNext · `get_logged_user`

Get the currently authenticated ERPNext user for the configured connection.

- **Service**: `erpnext`
- **Action**: `get_logged_user`
- **Action id**: `erpnext.get_logged_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "erpnext" --action "get_logged_user"
```

## Run

```bash
oo connector run "erpnext" --action "get_logged_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
