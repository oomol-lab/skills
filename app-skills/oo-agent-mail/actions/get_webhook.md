# AgentMail · `get_webhook`

Get a single AgentMail webhook.

- **Service**: `agent_mail`
- **Action**: `get_webhook`
- **Action id**: `agent_mail.get_webhook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "get_webhook"
```

## Run

```bash
oo connector run "agent_mail" --action "get_webhook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
