# Discord Bot · `test_auth`

Test the configured bot token against /users/@me.

- **Service**: `discordbot`
- **Action**: `test_auth`
- **Action id**: `discordbot.test_auth`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "test_auth"
```

## Run

```bash
oo connector run "discordbot" --action "test_auth" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
