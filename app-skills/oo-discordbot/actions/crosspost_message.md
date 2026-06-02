# Discord Bot · `crosspost_message`

Crosspost a message in an announcement channel.

- **Service**: `discordbot`
- **Action**: `crosspost_message`
- **Action id**: `discordbot.crosspost_message`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "crosspost_message"
```

## Run

```bash
oo connector run "discordbot" --action "crosspost_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
