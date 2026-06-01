# Discord Bot · `delete_auto_moderation_rule`

Delete an auto moderation rule.

- **Service**: `discordbot`
- **Action**: `delete_auto_moderation_rule`
- **Action id**: `discordbot.delete_auto_moderation_rule`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "delete_auto_moderation_rule"
```

## Run

```bash
oo connector run "discordbot" --action "delete_auto_moderation_rule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Discord Bot data. Always confirm the target and get explicit user approval before running.
