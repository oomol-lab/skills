# Short.io · `list_links`

List links for a Short.io domain with optional pagination and sort order.

- **Service**: `short_io`
- **Action**: `list_links`
- **Action id**: `short_io.list_links`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "short_io" --action "list_links"
```

## Run

```bash
oo connector run "short_io" --action "list_links" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
