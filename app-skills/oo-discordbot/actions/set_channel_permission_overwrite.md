# Discord Bot · `set_channel_permission_overwrite`

Create or update a channel permission overwrite.

- **Service**: `discordbot`
- **Action**: `set_channel_permission_overwrite`
- **Action id**: `discordbot.set_channel_permission_overwrite`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "set_channel_permission_overwrite"
```

## Run

```bash
oo connector run "discordbot" --action "set_channel_permission_overwrite" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
