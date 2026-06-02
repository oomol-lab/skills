# RAWG · `list_tags`

List game tags from RAWG.

- **Service**: `rawg`
- **Action**: `list_tags`
- **Action id**: `rawg.list_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rawg" --action "list_tags"
```

## Run

```bash
oo connector run "rawg" --action "list_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
