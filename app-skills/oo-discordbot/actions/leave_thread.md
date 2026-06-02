# Discord Bot · `leave_thread`

Leave a thread as the current bot user.

- **Service**: `discordbot`
- **Action**: `leave_thread`
- **Action id**: `discordbot.leave_thread`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "leave_thread"
```

## Run

```bash
oo connector run "discordbot" --action "leave_thread" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
