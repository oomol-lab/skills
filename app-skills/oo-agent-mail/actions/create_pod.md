# AgentMail · `create_pod`

Create an AgentMail pod.

- **Service**: `agent_mail`
- **Action**: `create_pod`
- **Action id**: `agent_mail.create_pod`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "create_pod"
```

## Run

```bash
oo connector run "agent_mail" --action "create_pod" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes AgentMail state. Confirm the exact payload and intended effect with the user before running.
