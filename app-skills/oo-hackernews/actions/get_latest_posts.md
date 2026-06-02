# Hacker News · `get_latest_posts`

Get the latest Hacker News posts via Algolia search_by_date.

- **Service**: `hackernews`
- **Action**: `get_latest_posts`
- **Action id**: `hackernews.get_latest_posts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackernews" --action "get_latest_posts"
```

## Run

```bash
oo connector run "hackernews" --action "get_latest_posts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
