# AgentMail · `list_pods`

List AgentMail pods.

- **Service**: `agent_mail`
- **Action**: `list_pods`
- **Action id**: `agent_mail.list_pods`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "list_pods"
```

## Run

```bash
oo connector run "agent_mail" --action "list_pods" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
