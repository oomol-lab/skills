# AgentMail · `create_inbox_list_entry`

Create an allow or block list entry scoped to a specific AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `create_inbox_list_entry`
- **Action id**: `agent_mail.create_inbox_list_entry`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "create_inbox_list_entry"
```

## Run

```bash
oo connector run "agent_mail" --action "create_inbox_list_entry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes AgentMail state. Confirm the exact payload and intended effect with the user before running.
