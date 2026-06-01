# Monday · `get_next_items_page`

Retrieve the next page of Monday items from an items_page cursor.

- **Service**: `monday`
- **Action**: `get_next_items_page`
- **Action id**: `monday.get_next_items_page`
- **Required scopes**: boards:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "get_next_items_page"
```

## Run

```bash
oo connector run "monday" --action "get_next_items_page" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
