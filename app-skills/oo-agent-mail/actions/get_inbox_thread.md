# AgentMail · `get_inbox_thread`

Get a single thread from a specific AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `get_inbox_thread`
- **Action id**: `agent_mail.get_inbox_thread`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "get_inbox_thread"
```

## Run

```bash
oo connector run "agent_mail" --action "get_inbox_thread" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
