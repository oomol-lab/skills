# Slack · `list_users`

List Slack users visible to the bot.

- **Service**: `slack`
- **Action**: `list_users`
- **Action id**: `slack.list_users`
- **Required scopes**: slack.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slack" --action "list_users"
```

## Run

```bash
oo connector run "slack" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
