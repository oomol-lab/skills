# Discord · `get_user`

Get a Discord user. OAuth mode only supports @me in this provider.

- **Service**: `discord`
- **Action**: `get_user`
- **Action id**: `discord.get_user`
- **Required scopes**: discord.user.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discord" --action "get_user"
```

## Run

```bash
oo connector run "discord" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
