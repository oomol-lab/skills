# Pexels · `search_photos`

Search Pexels photos by keyword with optional orientation, size, color, locale, and pagination filters.

- **Service**: `pexels`
- **Action**: `search_photos`
- **Action id**: `pexels.search_photos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pexels" --action "search_photos"
```

## Run

```bash
oo connector run "pexels" --action "search_photos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
