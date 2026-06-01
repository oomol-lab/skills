# Dev.to · `list_tags`

List Dev.to tags.

- **Service**: `devto`
- **Action**: `list_tags`
- **Action id**: `devto.list_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "devto" --action "list_tags"
```

## Run

```bash
oo connector run "devto" --action "list_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
