# Mistral AI · `list_libraries`

List all libraries under the current organization.

- **Service**: `mistral_ai`
- **Action**: `list_libraries`
- **Action id**: `mistral_ai.list_libraries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "list_libraries"
```

## Run

```bash
oo connector run "mistral_ai" --action "list_libraries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
