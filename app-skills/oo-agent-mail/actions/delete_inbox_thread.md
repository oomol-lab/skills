# AgentMail · `delete_inbox_thread`

Delete a thread from a specific AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `delete_inbox_thread`
- **Action id**: `agent_mail.delete_inbox_thread`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "delete_inbox_thread"
```

## Run

```bash
oo connector run "agent_mail" --action "delete_inbox_thread" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites AgentMail data. Always confirm the target and get explicit user approval before running.
