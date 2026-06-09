# AgentMail · `get_pod`

Get a single AgentMail pod.

- **Service**: `agent_mail`
- **Action**: `get_pod`
- **Action id**: `agent_mail.get_pod`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "get_pod"
```

## Run

```bash
oo connector run "agent_mail" --action "get_pod" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
