# Monday · `list_docs`

List Monday docs by document, object, or workspace identifiers.

- **Service**: `monday`
- **Action**: `list_docs`
- **Action id**: `monday.list_docs`
- **Required scopes**: docs:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "list_docs"
```

## Run

```bash
oo connector run "monday" --action "list_docs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
