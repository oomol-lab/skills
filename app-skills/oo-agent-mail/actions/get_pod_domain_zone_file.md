# AgentMail · `get_pod_domain_zone_file`

Get the DNS zone file records needed for an AgentMail pod domain.

- **Service**: `agent_mail`
- **Action**: `get_pod_domain_zone_file`
- **Action id**: `agent_mail.get_pod_domain_zone_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "get_pod_domain_zone_file"
```

## Run

```bash
oo connector run "agent_mail" --action "get_pod_domain_zone_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
