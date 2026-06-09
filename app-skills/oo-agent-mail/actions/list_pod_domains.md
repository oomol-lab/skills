# AgentMail · `list_pod_domains`

List AgentMail domains scoped to a pod.

- **Service**: `agent_mail`
- **Action**: `list_pod_domains`
- **Action id**: `agent_mail.list_pod_domains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "list_pod_domains"
```

## Run

```bash
oo connector run "agent_mail" --action "list_pod_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
