# Bolna · `list_agents`

List all Bolna voice agents in the authenticated workspace.

- **Service**: `bolna`
- **Action**: `list_agents`
- **Action id**: `bolna.list_agents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bolna" --action "list_agents"
```

## Run

```bash
oo connector run "bolna" --action "list_agents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
