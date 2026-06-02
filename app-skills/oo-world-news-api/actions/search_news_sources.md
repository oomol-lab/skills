# World News API · `search_news_sources`

Search World News API sources by name, language, or source country.

- **Service**: `world_news_api`
- **Action**: `search_news_sources`
- **Action id**: `world_news_api.search_news_sources`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "world_news_api" --action "search_news_sources"
```

## Run

```bash
oo connector run "world_news_api" --action "search_news_sources" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
