# Discord Bot · `pin_message`

Pin a message in a channel.

- **Service**: `discordbot`
- **Action**: `pin_message`
- **Action id**: `discordbot.pin_message`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "pin_message"
```

## Run

```bash
oo connector run "discordbot" --action "pin_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
