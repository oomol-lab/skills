# Discord Bot · `join_thread`

Join a thread as the current bot user.

- **Service**: `discordbot`
- **Action**: `join_thread`
- **Action id**: `discordbot.join_thread`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "join_thread"
```

## Run

```bash
oo connector run "discordbot" --action "join_thread" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
