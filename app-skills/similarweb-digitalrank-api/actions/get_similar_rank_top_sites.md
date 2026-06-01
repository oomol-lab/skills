# Similarweb · `get_similar_rank_top_sites`

List Similarweb top-ranked websites for a country and category, defaulting to the global $All ranking when filters are omitted.

- **Service**: `similarweb_digitalrank_api`
- **Action**: `get_similar_rank_top_sites`
- **Action id**: `similarweb_digitalrank_api.get_similar_rank_top_sites`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "similarweb_digitalrank_api" --action "get_similar_rank_top_sites"
```

## Run

```bash
oo connector run "similarweb_digitalrank_api" --action "get_similar_rank_top_sites" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
