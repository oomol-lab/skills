# Discord Bot · `list_channel_invites`

List invites for a channel.

- **Service**: `discordbot`
- **Action**: `list_channel_invites`
- **Action id**: `discordbot.list_channel_invites`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "list_channel_invites"
```

## Run

```bash
oo connector run "discordbot" --action "list_channel_invites" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
