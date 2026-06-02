# Discord Bot · `update_guild_sticker`

Update a guild sticker.

- **Service**: `discordbot`
- **Action**: `update_guild_sticker`
- **Action id**: `discordbot.update_guild_sticker`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "update_guild_sticker"
```

## Run

```bash
oo connector run "discordbot" --action "update_guild_sticker" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
