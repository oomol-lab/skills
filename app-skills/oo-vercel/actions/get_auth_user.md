# Vercel · `get_auth_user`

Get the authenticated Vercel user.

- **Service**: `vercel`
- **Action**: `get_auth_user`
- **Action id**: `vercel.get_auth_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "get_auth_user"
```

## Run

```bash
oo connector run "vercel" --action "get_auth_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
