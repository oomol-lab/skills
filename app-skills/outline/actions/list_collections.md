# Outline · `list_collections`

List Outline collections the authenticated user can access, with optional search, status filtering, pagination, and sorting.

- **Service**: `outline`
- **Action**: `list_collections`
- **Action id**: `outline.list_collections`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outline" --action "list_collections"
```

## Run

```bash
oo connector run "outline" --action "list_collections" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
