# Brave Search · `news_search`

Search Brave's news index for recent articles related to a query.

- **Service**: `brave_search`
- **Action**: `news_search`
- **Action id**: `brave_search.news_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "brave_search" --action "news_search"
```

## Run

```bash
oo connector run "brave_search" --action "news_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
