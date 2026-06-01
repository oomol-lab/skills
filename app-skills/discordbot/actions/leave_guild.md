# Discord Bot · `leave_guild`

Leave a guild as the current bot user.

- **Service**: `discordbot`
- **Action**: `leave_guild`
- **Action id**: `discordbot.leave_guild`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "leave_guild"
```

## Run

```bash
oo connector run "discordbot" --action "leave_guild" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
