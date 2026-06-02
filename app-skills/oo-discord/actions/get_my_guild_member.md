# Discord · `get_my_guild_member`

Get the current OAuth user's member record in a guild.

- **Service**: `discord`
- **Action**: `get_my_guild_member`
- **Action id**: `discord.get_my_guild_member`
- **Required scopes**: discord.guild_members.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discord" --action "get_my_guild_member"
```

## Run

```bash
oo connector run "discord" --action "get_my_guild_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
