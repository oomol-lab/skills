# Slack · `get_channel_messages`

Get messages from a Slack channel.

- **Service**: `slack`
- **Action**: `get_channel_messages`
- **Action id**: `slack.get_channel_messages`
- **Required scopes**: slack.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slack" --action "get_channel_messages"
```

## Run

```bash
oo connector run "slack" --action "get_channel_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
