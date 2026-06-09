# AgentMail · `batch_get_messages`

Fetch multiple messages from a specific AgentMail inbox by message ID.

- **Service**: `agent_mail`
- **Action**: `batch_get_messages`
- **Action id**: `agent_mail.batch_get_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "batch_get_messages"
```

## Run

```bash
oo connector run "agent_mail" --action "batch_get_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
