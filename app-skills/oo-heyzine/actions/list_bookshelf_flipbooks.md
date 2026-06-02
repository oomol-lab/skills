# Heyzine · `list_bookshelf_flipbooks`

List the flipbooks assigned to a specific Heyzine bookshelf.

- **Service**: `heyzine`
- **Action**: `list_bookshelf_flipbooks`
- **Action id**: `heyzine.list_bookshelf_flipbooks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heyzine" --action "list_bookshelf_flipbooks"
```

## Run

```bash
oo connector run "heyzine" --action "list_bookshelf_flipbooks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
