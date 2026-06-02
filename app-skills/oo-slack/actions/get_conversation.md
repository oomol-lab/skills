# Slack · `get_conversation`

Get metadata for a Slack conversation.

- **Service**: `slack`
- **Action**: `get_conversation`
- **Action id**: `slack.get_conversation`
- **Required scopes**: slack.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slack" --action "get_conversation"
```

## Run

```bash
oo connector run "slack" --action "get_conversation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
