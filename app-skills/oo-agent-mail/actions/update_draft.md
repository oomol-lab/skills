# AgentMail · `update_draft`

Update a draft in a specific AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `update_draft`
- **Action id**: `agent_mail.update_draft`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "update_draft"
```

## Run

```bash
oo connector run "agent_mail" --action "update_draft" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes AgentMail state. Confirm the exact payload and intended effect with the user before running.
