# Clerk · `unlock_user`

Unlock a Clerk user.

- **Service**: `clerk`
- **Action**: `unlock_user`
- **Action id**: `clerk.unlock_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clerk" --action "unlock_user"
```

## Run

```bash
oo connector run "clerk" --action "unlock_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
