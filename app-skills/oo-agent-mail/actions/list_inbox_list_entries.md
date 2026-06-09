# AgentMail · `list_inbox_list_entries`

List allow or block entries scoped to a specific AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `list_inbox_list_entries`
- **Action id**: `agent_mail.list_inbox_list_entries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "list_inbox_list_entries"
```

## Run

```bash
oo connector run "agent_mail" --action "list_inbox_list_entries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
