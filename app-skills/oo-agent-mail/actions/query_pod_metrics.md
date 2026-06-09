# AgentMail · `query_pod_metrics`

Query AgentMail metrics scoped to a pod.

- **Service**: `agent_mail`
- **Action**: `query_pod_metrics`
- **Action id**: `agent_mail.query_pod_metrics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "query_pod_metrics"
```

## Run

```bash
oo connector run "agent_mail" --action "query_pod_metrics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
