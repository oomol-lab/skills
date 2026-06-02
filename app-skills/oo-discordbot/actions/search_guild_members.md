# Discord Bot · `search_guild_members`

Search guild members by query.

- **Service**: `discordbot`
- **Action**: `search_guild_members`
- **Action id**: `discordbot.search_guild_members`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "search_guild_members"
```

## Run

```bash
oo connector run "discordbot" --action "search_guild_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
