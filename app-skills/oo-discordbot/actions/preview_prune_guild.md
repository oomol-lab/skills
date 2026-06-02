# Discord Bot · `preview_prune_guild`

Preview how many members would be pruned from a guild.

- **Service**: `discordbot`
- **Action**: `preview_prune_guild`
- **Action id**: `discordbot.preview_prune_guild`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "preview_prune_guild"
```

## Run

```bash
oo connector run "discordbot" --action "preview_prune_guild" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
