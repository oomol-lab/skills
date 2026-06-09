# AgentMail · `get_pod_inbox`

Get a single AgentMail inbox scoped to a pod.

- **Service**: `agent_mail`
- **Action**: `get_pod_inbox`
- **Action id**: `agent_mail.get_pod_inbox`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "get_pod_inbox"
```

## Run

```bash
oo connector run "agent_mail" --action "get_pod_inbox" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
