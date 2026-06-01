# Mistral AI · `list_agents`

List all Agents, optionally with pagination, name, source or metadata filtering parameters.

- **Service**: `mistral_ai`
- **Action**: `list_agents`
- **Action id**: `mistral_ai.list_agents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "list_agents"
```

## Run

```bash
oo connector run "mistral_ai" --action "list_agents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
