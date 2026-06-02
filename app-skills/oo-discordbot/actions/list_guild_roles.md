# Discord Bot · `list_guild_roles`

List roles in a guild.

- **Service**: `discordbot`
- **Action**: `list_guild_roles`
- **Action id**: `discordbot.list_guild_roles`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "list_guild_roles"
```

## Run

```bash
oo connector run "discordbot" --action "list_guild_roles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
