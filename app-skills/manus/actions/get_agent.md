# Manus · `get_agent`

Retrieve a Manus custom agent by ID.

- **Service**: `manus`
- **Action**: `get_agent`
- **Action id**: `manus.get_agent`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "get_agent"
```

## Run

```bash
oo connector run "manus" --action "get_agent" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
