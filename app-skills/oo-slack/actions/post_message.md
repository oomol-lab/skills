# Slack · `post_message`

Post a message to a Slack channel.

- **Service**: `slack`
- **Action**: `post_message`
- **Action id**: `slack.post_message`
- **Required scopes**: slack.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slack" --action "post_message"
```

## Run

```bash
oo connector run "slack" --action "post_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Slack state. Confirm the exact payload and intended effect with the user before running.
