# AgentMail · `search_threads`

Search AgentMail threads across accessible inboxes.

- **Service**: `agent_mail`
- **Action**: `search_threads`
- **Action id**: `agent_mail.search_threads`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "search_threads"
```

## Run

```bash
oo connector run "agent_mail" --action "search_threads" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
