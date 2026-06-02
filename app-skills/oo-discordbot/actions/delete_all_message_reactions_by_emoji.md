# Discord Bot · `delete_all_message_reactions_by_emoji`

Delete all reactions for a specific emoji on a message.

- **Service**: `discordbot`
- **Action**: `delete_all_message_reactions_by_emoji`
- **Action id**: `discordbot.delete_all_message_reactions_by_emoji`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "delete_all_message_reactions_by_emoji"
```

## Run

```bash
oo connector run "discordbot" --action "delete_all_message_reactions_by_emoji" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Discord Bot data. Always confirm the target and get explicit user approval before running.
