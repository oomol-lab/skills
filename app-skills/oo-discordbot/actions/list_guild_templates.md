# Discord Bot · `list_guild_templates`

List templates for a guild.

- **Service**: `discordbot`
- **Action**: `list_guild_templates`
- **Action id**: `discordbot.list_guild_templates`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "list_guild_templates"
```

## Run

```bash
oo connector run "discordbot" --action "list_guild_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
