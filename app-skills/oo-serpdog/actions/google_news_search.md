# Serpdog · `google_news_search`

Run a Google News request through Serpdog.

- **Service**: `serpdog`
- **Action**: `google_news_search`
- **Action id**: `serpdog.google_news_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "serpdog" --action "google_news_search"
```

## Run

```bash
oo connector run "serpdog" --action "google_news_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
