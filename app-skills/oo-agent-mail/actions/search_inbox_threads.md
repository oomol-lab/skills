# AgentMail · `search_inbox_threads`

Search threads in a specific AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `search_inbox_threads`
- **Action id**: `agent_mail.search_inbox_threads`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "search_inbox_threads"
```

## Run

```bash
oo connector run "agent_mail" --action "search_inbox_threads" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
