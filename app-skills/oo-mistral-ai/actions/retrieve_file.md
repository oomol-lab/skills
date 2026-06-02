# Mistral AI · `retrieve_file`

Get file metadata by file ID.

- **Service**: `mistral_ai`
- **Action**: `retrieve_file`
- **Action id**: `mistral_ai.retrieve_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "retrieve_file"
```

## Run

```bash
oo connector run "mistral_ai" --action "retrieve_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
