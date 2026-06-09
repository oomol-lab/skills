# AgentMail · `get_inbox`

Get a single AgentMail inbox.

- **Service**: `agent_mail`
- **Action**: `get_inbox`
- **Action id**: `agent_mail.get_inbox`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "get_inbox"
```

## Run

```bash
oo connector run "agent_mail" --action "get_inbox" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
