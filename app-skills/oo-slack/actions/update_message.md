# Slack · `update_message`

Update a Slack message posted by the bot.

- **Service**: `slack`
- **Action**: `update_message`
- **Action id**: `slack.update_message`
- **Required scopes**: slack.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slack" --action "update_message"
```

## Run

```bash
oo connector run "slack" --action "update_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Slack state. Confirm the exact payload and intended effect with the user before running.
