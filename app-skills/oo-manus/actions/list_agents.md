# Manus · `list_agents`

List Manus custom agents in the current account.

- **Service**: `manus`
- **Action**: `list_agents`
- **Action id**: `manus.list_agents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "list_agents"
```

## Run

```bash
oo connector run "manus" --action "list_agents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
