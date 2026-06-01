# Discord Bot · `list_message_reactions_by_emoji`

List users who reacted to a message with a specific emoji.

- **Service**: `discordbot`
- **Action**: `list_message_reactions_by_emoji`
- **Action id**: `discordbot.list_message_reactions_by_emoji`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "list_message_reactions_by_emoji"
```

## Run

```bash
oo connector run "discordbot" --action "list_message_reactions_by_emoji" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
