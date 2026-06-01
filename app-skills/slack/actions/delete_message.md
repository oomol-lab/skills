# Slack · `delete_message`

Delete a Slack message posted by the bot.

- **Service**: `slack`
- **Action**: `delete_message`
- **Action id**: `slack.delete_message`
- **Required scopes**: slack.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slack" --action "delete_message"
```

## Run

```bash
oo connector run "slack" --action "delete_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Slack data. Always confirm the target and get explicit user approval before running.
