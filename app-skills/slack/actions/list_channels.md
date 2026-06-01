# Slack · `list_channels`

List Slack channels.

- **Service**: `slack`
- **Action**: `list_channels`
- **Action id**: `slack.list_channels`
- **Required scopes**: slack.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slack" --action "list_channels"
```

## Run

```bash
oo connector run "slack" --action "list_channels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
