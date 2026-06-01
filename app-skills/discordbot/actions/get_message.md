# Discord Bot · `get_message`

Get a message by channel id and message id.

- **Service**: `discordbot`
- **Action**: `get_message`
- **Action id**: `discordbot.get_message`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_message"
```

## Run

```bash
oo connector run "discordbot" --action "get_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
