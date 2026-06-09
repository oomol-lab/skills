# AgentMail · `get_inbox_list_entry`

Get an allow or block list entry scoped to a specific AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `get_inbox_list_entry`
- **Action id**: `agent_mail.get_inbox_list_entry`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "get_inbox_list_entry"
```

## Run

```bash
oo connector run "agent_mail" --action "get_inbox_list_entry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
