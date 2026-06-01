# Discord Bot · `delete_group_dm_user`

Remove a recipient from a group DM channel.

- **Service**: `discordbot`
- **Action**: `delete_group_dm_user`
- **Action id**: `discordbot.delete_group_dm_user`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "delete_group_dm_user"
```

## Run

```bash
oo connector run "discordbot" --action "delete_group_dm_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Discord Bot data. Always confirm the target and get explicit user approval before running.
