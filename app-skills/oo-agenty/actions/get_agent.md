# Agenty · `get_agent`

Get one Agenty agent by agent identifier.

- **Service**: `agenty`
- **Action**: `get_agent`
- **Action id**: `agenty.get_agent`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "get_agent"
```

## Run

```bash
oo connector run "agenty" --action "get_agent" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
