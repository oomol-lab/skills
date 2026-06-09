# YNAB · `get_user`

Retrieve the authenticated YNAB user.

- **Service**: `ynab`
- **Action**: `get_user`
- **Action id**: `ynab.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ynab" --action "get_user"
```

## Run

```bash
oo connector run "ynab" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
