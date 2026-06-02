# Codemagic · `list_user_teams`

List the Codemagic teams accessible to the authenticated user.

- **Service**: `codemagic`
- **Action**: `list_user_teams`
- **Action id**: `codemagic.list_user_teams`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "codemagic" --action "list_user_teams"
```

## Run

```bash
oo connector run "codemagic" --action "list_user_teams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
