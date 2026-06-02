# Discord Bot · `get_guild_welcome_screen`

Get a guild welcome screen.

- **Service**: `discordbot`
- **Action**: `get_guild_welcome_screen`
- **Action id**: `discordbot.get_guild_welcome_screen`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_guild_welcome_screen"
```

## Run

```bash
oo connector run "discordbot" --action "get_guild_welcome_screen" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
