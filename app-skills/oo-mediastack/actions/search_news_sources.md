# Mediastack · `search_news_sources`

Search Mediastack news sources with language, country, category, and pagination filters.

- **Service**: `mediastack`
- **Action**: `search_news_sources`
- **Action id**: `mediastack.search_news_sources`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mediastack" --action "search_news_sources"
```

## Run

```bash
oo connector run "mediastack" --action "search_news_sources" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
