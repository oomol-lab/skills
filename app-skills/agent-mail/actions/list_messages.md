# AgentMail · `list_messages`

List messages from a specific AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `list_messages`
- **Action id**: `agent_mail.list_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "list_messages"
```

## Run

```bash
oo connector run "agent_mail" --action "list_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
