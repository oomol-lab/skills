# Clerk · `unban_user`

Unban a Clerk user.

- **Service**: `clerk`
- **Action**: `unban_user`
- **Action id**: `clerk.unban_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clerk" --action "unban_user"
```

## Run

```bash
oo connector run "clerk" --action "unban_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
