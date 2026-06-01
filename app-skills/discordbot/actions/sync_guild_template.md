# Discord Bot · `sync_guild_template`

Sync a guild template with the current guild state.

- **Service**: `discordbot`
- **Action**: `sync_guild_template`
- **Action id**: `discordbot.sync_guild_template`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "sync_guild_template"
```

## Run

```bash
oo connector run "discordbot" --action "sync_guild_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
