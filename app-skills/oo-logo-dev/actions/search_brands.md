# Logo.dev · `search_brands`

Search Logo.dev brands by query text and return candidate brands.

- **Service**: `logo_dev`
- **Action**: `search_brands`
- **Action id**: `logo_dev.search_brands`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "logo_dev" --action "search_brands"
```

## Run

```bash
oo connector run "logo_dev" --action "search_brands" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
