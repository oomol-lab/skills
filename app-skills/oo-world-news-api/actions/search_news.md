# World News API · `search_news`

Search news articles with World News API using the first-pass filtering subset.

- **Service**: `world_news_api`
- **Action**: `search_news`
- **Action id**: `world_news_api.search_news`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "world_news_api" --action "search_news"
```

## Run

```bash
oo connector run "world_news_api" --action "search_news" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
