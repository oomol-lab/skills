# FlowiseAI · `get_chatflow`

Fetch the FlowiseAI chatflow currently protected by the connected API key.

- **Service**: `flowiseai`
- **Action**: `get_chatflow`
- **Action id**: `flowiseai.get_chatflow`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "flowiseai" --action "get_chatflow"
```

## Run

```bash
oo connector run "flowiseai" --action "get_chatflow" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
