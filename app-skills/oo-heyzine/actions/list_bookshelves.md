# Heyzine · `list_bookshelves`

List the bookshelves accessible with the current Heyzine API key.

- **Service**: `heyzine`
- **Action**: `list_bookshelves`
- **Action id**: `heyzine.list_bookshelves`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heyzine" --action "list_bookshelves"
```

## Run

```bash
oo connector run "heyzine" --action "list_bookshelves" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
