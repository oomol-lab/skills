# Discord Bot · `delete_guild`

Delete a guild owned by the platform bot.

- **Service**: `discordbot`
- **Action**: `delete_guild`
- **Action id**: `discordbot.delete_guild`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "delete_guild"
```

## Run

```bash
oo connector run "discordbot" --action "delete_guild" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Discord Bot data. Always confirm the target and get explicit user approval before running.
