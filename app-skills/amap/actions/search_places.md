# AMap · `search_places`

Search places by keyword.

- **Service**: `amap`
- **Action**: `search_places`
- **Action id**: `amap.search_places`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amap" --action "search_places"
```

## Run

```bash
oo connector run "amap" --action "search_places" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
