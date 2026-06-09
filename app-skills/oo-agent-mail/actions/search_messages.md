# AgentMail · `search_messages`

Search messages in a specific AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `search_messages`
- **Action id**: `agent_mail.search_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "search_messages"
```

## Run

```bash
oo connector run "agent_mail" --action "search_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
