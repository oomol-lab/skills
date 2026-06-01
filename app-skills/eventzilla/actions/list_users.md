# Eventzilla · `list_users`

List Eventzilla organizers and sub-organizers visible to the authenticated account.

- **Service**: `eventzilla`
- **Action**: `list_users`
- **Action id**: `eventzilla.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eventzilla" --action "list_users"
```

## Run

```bash
oo connector run "eventzilla" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
