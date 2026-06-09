# AgentMail · `update_inbox`

Update an AgentMail inbox display name or metadata.

- **Service**: `agent_mail`
- **Action**: `update_inbox`
- **Action id**: `agent_mail.update_inbox`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "update_inbox"
```

## Run

```bash
oo connector run "agent_mail" --action "update_inbox" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes AgentMail state. Confirm the exact payload and intended effect with the user before running.
