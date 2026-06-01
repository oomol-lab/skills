# Discord Bot · `create_auto_moderation_rule`

Create a guild auto moderation rule.

- **Service**: `discordbot`
- **Action**: `create_auto_moderation_rule`
- **Action id**: `discordbot.create_auto_moderation_rule`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "create_auto_moderation_rule"
```

## Run

```bash
oo connector run "discordbot" --action "create_auto_moderation_rule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
