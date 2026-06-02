# Discord Bot · `bulk_delete_messages`

Bulk delete messages in a Discord channel.

- **Service**: `discordbot`
- **Action**: `bulk_delete_messages`
- **Action id**: `discordbot.bulk_delete_messages`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "bulk_delete_messages"
```

## Run

```bash
oo connector run "discordbot" --action "bulk_delete_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Discord Bot data. Always confirm the target and get explicit user approval before running.
