# Mistral AI · `list_library_shares`

List shared access records for the specified library.

- **Service**: `mistral_ai`
- **Action**: `list_library_shares`
- **Action id**: `mistral_ai.list_library_shares`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "list_library_shares"
```

## Run

```bash
oo connector run "mistral_ai" --action "list_library_shares" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
