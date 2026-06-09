# AgentMail · `list_webhooks`

List AgentMail webhooks.

- **Service**: `agent_mail`
- **Action**: `list_webhooks`
- **Action id**: `agent_mail.list_webhooks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "list_webhooks"
```

## Run

```bash
oo connector run "agent_mail" --action "list_webhooks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
