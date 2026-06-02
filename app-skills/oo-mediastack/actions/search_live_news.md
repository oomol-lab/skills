# Mediastack · `search_live_news`

Search live Mediastack news articles with optional keyword, source, location, and sorting filters.

- **Service**: `mediastack`
- **Action**: `search_live_news`
- **Action id**: `mediastack.search_live_news`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mediastack" --action "search_live_news"
```

## Run

```bash
oo connector run "mediastack" --action "search_live_news" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
