# AgentMail · `send_message`

Send a message from a specific AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `send_message`
- **Action id**: `agent_mail.send_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "send_message"
```

## Run

```bash
oo connector run "agent_mail" --action "send_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes AgentMail state. Confirm the exact payload and intended effect with the user before running.
