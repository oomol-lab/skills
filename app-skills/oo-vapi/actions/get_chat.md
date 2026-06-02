# Vapi · `get_chat`

Retrieve a Vapi chat by its unique identifier.

- **Service**: `vapi`
- **Action**: `get_chat`
- **Action id**: `vapi.get_chat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "get_chat"
```

## Run

```bash
oo connector run "vapi" --action "get_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
