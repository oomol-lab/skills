# Clerk · `lock_user`

Lock a Clerk user.

- **Service**: `clerk`
- **Action**: `lock_user`
- **Action id**: `clerk.lock_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clerk" --action "lock_user"
```

## Run

```bash
oo connector run "clerk" --action "lock_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
