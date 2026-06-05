# NewsData.io · `search_news_archive`

Search historical NewsData.io archive articles with keyword, taxonomy, and date filters.

- **Service**: `newsdata_io`
- **Action**: `search_news_archive`
- **Action id**: `newsdata_io.search_news_archive`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "newsdata_io" --action "search_news_archive"
```

## Run

```bash
oo connector run "newsdata_io" --action "search_news_archive" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
