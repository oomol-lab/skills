# AgentMail · `query_metrics`

Query AgentMail metrics across accessible resources.

- **Service**: `agent_mail`
- **Action**: `query_metrics`
- **Action id**: `agent_mail.query_metrics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "query_metrics"
```

## Run

```bash
oo connector run "agent_mail" --action "query_metrics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
