# Ipregistry · `parse_user_agents`

Parse one or more user-agent strings with Ipregistry.

- **Service**: `ipregistry`
- **Action**: `parse_user_agents`
- **Action id**: `ipregistry.parse_user_agents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipregistry" --action "parse_user_agents"
```

## Run

```bash
oo connector run "ipregistry" --action "parse_user_agents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
