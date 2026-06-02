# Discord Bot · `delete_my_message_reaction`

Delete the current bot user's reaction on a message.

- **Service**: `discordbot`
- **Action**: `delete_my_message_reaction`
- **Action id**: `discordbot.delete_my_message_reaction`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "delete_my_message_reaction"
```

## Run

```bash
oo connector run "discordbot" --action "delete_my_message_reaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Discord Bot data. Always confirm the target and get explicit user approval before running.
