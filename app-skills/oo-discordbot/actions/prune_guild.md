# Discord Bot · `prune_guild`

Prune inactive members from a guild.

- **Service**: `discordbot`
- **Action**: `prune_guild`
- **Action id**: `discordbot.prune_guild`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "prune_guild"
```

## Run

```bash
oo connector run "discordbot" --action "prune_guild" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
