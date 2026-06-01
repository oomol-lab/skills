# Discord Bot · `delete_guild_template`

Delete a guild template.

- **Service**: `discordbot`
- **Action**: `delete_guild_template`
- **Action id**: `discordbot.delete_guild_template`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "delete_guild_template"
```

## Run

```bash
oo connector run "discordbot" --action "delete_guild_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Discord Bot data. Always confirm the target and get explicit user approval before running.
