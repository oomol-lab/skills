# AgentMail · `get_thread`

Get a single AgentMail thread.

- **Service**: `agent_mail`
- **Action**: `get_thread`
- **Action id**: `agent_mail.get_thread`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "get_thread"
```

## Run

```bash
oo connector run "agent_mail" --action "get_thread" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
