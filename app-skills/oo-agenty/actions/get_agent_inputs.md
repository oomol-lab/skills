# Agenty · `get_agent_inputs`

Get the current Agenty input configuration for one agent.

- **Service**: `agenty`
- **Action**: `get_agent_inputs`
- **Action id**: `agenty.get_agent_inputs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "get_agent_inputs"
```

## Run

```bash
oo connector run "agenty" --action "get_agent_inputs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
