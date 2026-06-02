# Discord Bot · `trigger_typing_indicator`

Trigger the typing indicator in a channel.

- **Service**: `discordbot`
- **Action**: `trigger_typing_indicator`
- **Action id**: `discordbot.trigger_typing_indicator`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "trigger_typing_indicator"
```

## Run

```bash
oo connector run "discordbot" --action "trigger_typing_indicator" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Discord Bot state. Confirm the exact payload and intended effect with the user before running.
