# Gigasheet · `search_library`

Search Gigasheet library metadata without reading file contents.

- **Service**: `gigasheet`
- **Action**: `search_library`
- **Action id**: `gigasheet.search_library`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gigasheet" --action "search_library"
```

## Run

```bash
oo connector run "gigasheet" --action "search_library" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
