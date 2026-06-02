# Discord Bot · `delete_channel_permission_overwrite`

Delete a channel permission overwrite.

- **Service**: `discordbot`
- **Action**: `delete_channel_permission_overwrite`
- **Action id**: `discordbot.delete_channel_permission_overwrite`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "delete_channel_permission_overwrite"
```

## Run

```bash
oo connector run "discordbot" --action "delete_channel_permission_overwrite" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Discord Bot data. Always confirm the target and get explicit user approval before running.
