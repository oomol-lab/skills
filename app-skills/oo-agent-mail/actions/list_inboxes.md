# AgentMail · `list_inboxes`

List inboxes available to the current AgentMail API key.

- **Service**: `agent_mail`
- **Action**: `list_inboxes`
- **Action id**: `agent_mail.list_inboxes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "list_inboxes"
```

## Run

```bash
oo connector run "agent_mail" --action "list_inboxes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
