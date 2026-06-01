# Discord Bot · `get_user`

Get a user by id.

- **Service**: `discordbot`
- **Action**: `get_user`
- **Action id**: `discordbot.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_user"
```

## Run

```bash
oo connector run "discordbot" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
