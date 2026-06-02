# World News API · `get_top_news`

Retrieve top-news clusters for one source country and optional language or date filters.

- **Service**: `world_news_api`
- **Action**: `get_top_news`
- **Action id**: `world_news_api.get_top_news`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "world_news_api" --action "get_top_news"
```

## Run

```bash
oo connector run "world_news_api" --action "get_top_news" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
