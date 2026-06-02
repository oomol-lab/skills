# Slack · `get_message_permalink`

Get a permalink for a Slack message.

- **Service**: `slack`
- **Action**: `get_message_permalink`
- **Action id**: `slack.get_message_permalink`
- **Required scopes**: slack.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slack" --action "get_message_permalink"
```

## Run

```bash
oo connector run "slack" --action "get_message_permalink" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
