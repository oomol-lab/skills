# AgentMail · `get_draft`

Get a draft from a specific AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `get_draft`
- **Action id**: `agent_mail.get_draft`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "get_draft"
```

## Run

```bash
oo connector run "agent_mail" --action "get_draft" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
