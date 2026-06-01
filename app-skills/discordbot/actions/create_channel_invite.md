# Discord Bot · `create_channel_invite`

Create an invite for a Discord channel.

- **Service**: `discordbot`
- **Action**: `create_channel_invite`
- **Action id**: `discordbot.create_channel_invite`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "create_channel_invite"
```

## Run

```bash
oo connector run "discordbot" --action "create_channel_invite" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
