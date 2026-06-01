# Discord · `get_my_user`

Get the current OAuth user profile.

- **Service**: `discord`
- **Action**: `get_my_user`
- **Action id**: `discord.get_my_user`
- **Required scopes**: discord.user.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discord" --action "get_my_user"
```

## Run

```bash
oo connector run "discord" --action "get_my_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
