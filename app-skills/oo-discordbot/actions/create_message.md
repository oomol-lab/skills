# Discord Bot · `create_message`

Create a Discord channel message with the platform bot token.

- **Service**: `discordbot`
- **Action**: `create_message`
- **Action id**: `discordbot.create_message`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "create_message"
```

## Run

```bash
oo connector run "discordbot" --action "create_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
