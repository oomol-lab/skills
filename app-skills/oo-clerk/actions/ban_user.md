# Clerk · `ban_user`

Ban a Clerk user.

- **Service**: `clerk`
- **Action**: `ban_user`
- **Action id**: `clerk.ban_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clerk" --action "ban_user"
```

## Run

```bash
oo connector run "clerk" --action "ban_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
