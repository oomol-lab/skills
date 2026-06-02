# Discord Bot · `get_thread_member`

Get a thread member by user id.

- **Service**: `discordbot`
- **Action**: `get_thread_member`
- **Action id**: `discordbot.get_thread_member`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_thread_member"
```

## Run

```bash
oo connector run "discordbot" --action "get_thread_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
