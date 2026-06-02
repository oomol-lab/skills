# Discord Bot · `unpin_message`

Unpin a message in a channel.

- **Service**: `discordbot`
- **Action**: `unpin_message`
- **Action id**: `discordbot.unpin_message`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "unpin_message"
```

## Run

```bash
oo connector run "discordbot" --action "unpin_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
