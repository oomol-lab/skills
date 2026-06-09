# AgentMail · `update_message`

Update labels on a message in a specific AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `update_message`
- **Action id**: `agent_mail.update_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "update_message"
```

## Run

```bash
oo connector run "agent_mail" --action "update_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes AgentMail state. Confirm the exact payload and intended effect with the user before running.
