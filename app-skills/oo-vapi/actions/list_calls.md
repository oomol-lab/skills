# Vapi · `list_calls`

List Vapi calls with optional filtering by call, assistant, phone number, and created or updated timestamps.

- **Service**: `vapi`
- **Action**: `list_calls`
- **Action id**: `vapi.list_calls`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "list_calls"
```

## Run

```bash
oo connector run "vapi" --action "list_calls" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
