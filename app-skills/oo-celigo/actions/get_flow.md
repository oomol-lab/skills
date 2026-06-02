# Celigo · `get_flow`

Get one Celigo flow by flow ID.

- **Service**: `celigo`
- **Action**: `get_flow`
- **Action id**: `celigo.get_flow`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "celigo" --action "get_flow"
```

## Run

```bash
oo connector run "celigo" --action "get_flow" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
