# Klazify · `get_iab_categories`

Return the IAB category classification for one website URL with Klazify.

- **Service**: `klazify`
- **Action**: `get_iab_categories`
- **Action id**: `klazify.get_iab_categories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "klazify" --action "get_iab_categories"
```

## Run

```bash
oo connector run "klazify" --action "get_iab_categories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
