# NewsData.io · `list_news_sources`

List NewsData.io source domains with optional country, category, and language filters.

- **Service**: `newsdata_io`
- **Action**: `list_news_sources`
- **Action id**: `newsdata_io.list_news_sources`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "newsdata_io" --action "list_news_sources"
```

## Run

```bash
oo connector run "newsdata_io" --action "list_news_sources" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
