# AgentMail · `verify_domain`

Ask AgentMail to verify a domain's DNS records.

- **Service**: `agent_mail`
- **Action**: `verify_domain`
- **Action id**: `agent_mail.verify_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "verify_domain"
```

## Run

```bash
oo connector run "agent_mail" --action "verify_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
