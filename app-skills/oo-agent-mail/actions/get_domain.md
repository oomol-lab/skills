# AgentMail · `get_domain`

Get a single AgentMail domain.

- **Service**: `agent_mail`
- **Action**: `get_domain`
- **Action id**: `agent_mail.get_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "get_domain"
```

## Run

```bash
oo connector run "agent_mail" --action "get_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
