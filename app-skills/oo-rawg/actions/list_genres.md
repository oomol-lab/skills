# RAWG · `list_genres`

List game genres from RAWG.

- **Service**: `rawg`
- **Action**: `list_genres`
- **Action id**: `rawg.list_genres`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rawg" --action "list_genres"
```

## Run

```bash
oo connector run "rawg" --action "list_genres" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
