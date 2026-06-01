# Discord Bot · `create_thread_from_message`

Create a thread from a Discord message.

- **Service**: `discordbot`
- **Action**: `create_thread_from_message`
- **Action id**: `discordbot.create_thread_from_message`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "create_thread_from_message"
```

## Run

```bash
oo connector run "discordbot" --action "create_thread_from_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
