# Agenty · `list_agents`

List Agenty agents with optional pagination and sorting parameters.

- **Service**: `agenty`
- **Action**: `list_agents`
- **Action id**: `agenty.list_agents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "list_agents"
```

## Run

```bash
oo connector run "agenty" --action "list_agents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
