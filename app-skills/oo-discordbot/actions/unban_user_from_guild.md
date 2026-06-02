# Discord Bot · `unban_user_from_guild`

Remove a guild ban for a user.

- **Service**: `discordbot`
- **Action**: `unban_user_from_guild`
- **Action id**: `discordbot.unban_user_from_guild`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "unban_user_from_guild"
```

## Run

```bash
oo connector run "discordbot" --action "unban_user_from_guild" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
