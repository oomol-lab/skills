# Vapi · `get_call`

Retrieve a single Vapi call by its unique identifier.

- **Service**: `vapi`
- **Action**: `get_call`
- **Action id**: `vapi.get_call`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "get_call"
```

## Run

```bash
oo connector run "vapi" --action "get_call" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
