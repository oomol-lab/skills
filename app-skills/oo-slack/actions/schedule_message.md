# Slack · `schedule_message`

Schedule a Slack message to be posted later.

- **Service**: `slack`
- **Action**: `schedule_message`
- **Action id**: `slack.schedule_message`
- **Required scopes**: slack.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slack" --action "schedule_message"
```

## Run

```bash
oo connector run "slack" --action "schedule_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Slack state. Confirm the exact payload and intended effect with the user before running.
