# Slack · `get_thread`

Get messages in a Slack thread.

- **Service**: `slack`
- **Action**: `get_thread`
- **Action id**: `slack.get_thread`
- **Required scopes**: slack.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slack" --action "get_thread"
```

## Run

```bash
oo connector run "slack" --action "get_thread" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
