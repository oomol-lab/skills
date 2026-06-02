# Bolna · `get_agent`

Get one Bolna voice agent by agent_id.

- **Service**: `bolna`
- **Action**: `get_agent`
- **Action id**: `bolna.get_agent`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bolna" --action "get_agent"
```

## Run

```bash
oo connector run "bolna" --action "get_agent" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
