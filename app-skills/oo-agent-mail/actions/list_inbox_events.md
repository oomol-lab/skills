# AgentMail · `list_inbox_events`

List events scoped to a specific AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `list_inbox_events`
- **Action id**: `agent_mail.list_inbox_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "list_inbox_events"
```

## Run

```bash
oo connector run "agent_mail" --action "list_inbox_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
