# AgentMail · `who_am_i`

Get AgentMail identity information for the current API key.

- **Service**: `agent_mail`
- **Action**: `who_am_i`
- **Action id**: `agent_mail.who_am_i`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "who_am_i"
```

## Run

```bash
oo connector run "agent_mail" --action "who_am_i" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
