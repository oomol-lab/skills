# Vapi · `get_tool`

Retrieve a Vapi tool by its unique identifier.

- **Service**: `vapi`
- **Action**: `get_tool`
- **Action id**: `vapi.get_tool`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "get_tool"
```

## Run

```bash
oo connector run "vapi" --action "get_tool" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
