# Serply · `google_news_search`

Search Google News through Serply and return feed-style article results.

- **Service**: `serply`
- **Action**: `google_news_search`
- **Action id**: `serply.google_news_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "serply" --action "google_news_search"
```

## Run

```bash
oo connector run "serply" --action "google_news_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
