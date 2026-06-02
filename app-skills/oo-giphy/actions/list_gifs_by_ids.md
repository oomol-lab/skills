# GIPHY · `list_gifs_by_ids`

Fetch multiple GIPHY GIFs by id.

- **Service**: `giphy`
- **Action**: `list_gifs_by_ids`
- **Action id**: `giphy.list_gifs_by_ids`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "giphy" --action "list_gifs_by_ids"
```

## Run

```bash
oo connector run "giphy" --action "list_gifs_by_ids" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
