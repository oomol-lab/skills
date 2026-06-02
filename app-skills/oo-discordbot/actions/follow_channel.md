# Discord Bot · `follow_channel`

Follow an announcement channel into a target channel.

- **Service**: `discordbot`
- **Action**: `follow_channel`
- **Action id**: `discordbot.follow_channel`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "follow_channel"
```

## Run

```bash
oo connector run "discordbot" --action "follow_channel" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
