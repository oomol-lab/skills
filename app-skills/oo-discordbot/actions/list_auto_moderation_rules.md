# Discord Bot · `list_auto_moderation_rules`

List auto moderation rules for a guild.

- **Service**: `discordbot`
- **Action**: `list_auto_moderation_rules`
- **Action id**: `discordbot.list_auto_moderation_rules`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "list_auto_moderation_rules"
```

## Run

```bash
oo connector run "discordbot" --action "list_auto_moderation_rules" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
