# Discord Bot · `list_pinned_messages`

List pinned messages in a channel.

- **Service**: `discordbot`
- **Action**: `list_pinned_messages`
- **Action id**: `discordbot.list_pinned_messages`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "list_pinned_messages"
```

## Run

```bash
oo connector run "discordbot" --action "list_pinned_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
