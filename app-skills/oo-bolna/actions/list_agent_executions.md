# Bolna · `list_agent_executions`

List execution history for one Bolna voice agent.

- **Service**: `bolna`
- **Action**: `list_agent_executions`
- **Action id**: `bolna.list_agent_executions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bolna" --action "list_agent_executions"
```

## Run

```bash
oo connector run "bolna" --action "list_agent_executions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
