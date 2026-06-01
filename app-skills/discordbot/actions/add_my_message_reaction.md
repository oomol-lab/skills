# Discord Bot · `add_my_message_reaction`

Add a reaction as the current bot user.

- **Service**: `discordbot`
- **Action**: `add_my_message_reaction`
- **Action id**: `discordbot.add_my_message_reaction`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "add_my_message_reaction"
```

## Run

```bash
oo connector run "discordbot" --action "add_my_message_reaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
