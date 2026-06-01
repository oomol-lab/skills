# AgentMail · `create_inbox`

Create a new AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `create_inbox`
- **Action id**: `agent_mail.create_inbox`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "create_inbox"
```

## Run

```bash
oo connector run "agent_mail" --action "create_inbox" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes AgentMail state. Confirm the exact payload and intended effect with the user before running.
