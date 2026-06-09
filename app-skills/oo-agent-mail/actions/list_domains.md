# AgentMail · `list_domains`

List AgentMail domains.

- **Service**: `agent_mail`
- **Action**: `list_domains`
- **Action id**: `agent_mail.list_domains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "list_domains"
```

## Run

```bash
oo connector run "agent_mail" --action "list_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
