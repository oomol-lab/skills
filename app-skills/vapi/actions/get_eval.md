# Vapi · `get_eval`

Retrieve a Vapi eval by its unique identifier.

- **Service**: `vapi`
- **Action**: `get_eval`
- **Action id**: `vapi.get_eval`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "get_eval"
```

## Run

```bash
oo connector run "vapi" --action "get_eval" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
