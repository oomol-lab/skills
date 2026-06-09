# AgentMail · `update_webhook`

Update an AgentMail webhook.

- **Service**: `agent_mail`
- **Action**: `update_webhook`
- **Action id**: `agent_mail.update_webhook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "update_webhook"
```

## Run

```bash
oo connector run "agent_mail" --action "update_webhook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes AgentMail state. Confirm the exact payload and intended effect with the user before running.
