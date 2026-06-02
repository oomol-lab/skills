# Hacker News · `search_posts`

Search Hacker News posts using Algolia full-text search.

- **Service**: `hackernews`
- **Action**: `search_posts`
- **Action id**: `hackernews.search_posts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackernews" --action "search_posts"
```

## Run

```bash
oo connector run "hackernews" --action "search_posts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
