# AgentMail · `list_pod_drafts`

List AgentMail drafts scoped to a pod.

- **Service**: `agent_mail`
- **Action**: `list_pod_drafts`
- **Action id**: `agent_mail.list_pod_drafts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "list_pod_drafts"
```

## Run

```bash
oo connector run "agent_mail" --action "list_pod_drafts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
