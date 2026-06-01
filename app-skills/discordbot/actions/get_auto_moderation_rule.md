# Discord Bot · `get_auto_moderation_rule`

Get an auto moderation rule.

- **Service**: `discordbot`
- **Action**: `get_auto_moderation_rule`
- **Action id**: `discordbot.get_auto_moderation_rule`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_auto_moderation_rule"
```

## Run

```bash
oo connector run "discordbot" --action "get_auto_moderation_rule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
