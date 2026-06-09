# AgentMail · `delete_inbox`

Delete an AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `delete_inbox`
- **Action id**: `agent_mail.delete_inbox`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "delete_inbox"
```

## Run

```bash
oo connector run "agent_mail" --action "delete_inbox" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites AgentMail data. Always confirm the target and get explicit user approval before running.
