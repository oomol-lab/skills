# AgentMail · `get_organization`

Get the AgentMail organization available to the current API key.

- **Service**: `agent_mail`
- **Action**: `get_organization`
- **Action id**: `agent_mail.get_organization`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "get_organization"
```

## Run

```bash
oo connector run "agent_mail" --action "get_organization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
