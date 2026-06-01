# Mistral AI · `get_library`

Get individual library details by library ID.

- **Service**: `mistral_ai`
- **Action**: `get_library`
- **Action id**: `mistral_ai.get_library`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "get_library"
```

## Run

```bash
oo connector run "mistral_ai" --action "get_library" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
