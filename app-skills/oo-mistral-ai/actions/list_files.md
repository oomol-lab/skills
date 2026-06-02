# Mistral AI · `list_files`

List all files under the current organization.

- **Service**: `mistral_ai`
- **Action**: `list_files`
- **Action id**: `mistral_ai.list_files`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "list_files"
```

## Run

```bash
oo connector run "mistral_ai" --action "list_files" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
