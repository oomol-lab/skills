# OKSign · `list_users`

List the users configured in the current OKSign account.

- **Service**: `oksign`
- **Action**: `list_users`
- **Action id**: `oksign.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "oksign" --action "list_users"
```

## Run

```bash
oo connector run "oksign" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
