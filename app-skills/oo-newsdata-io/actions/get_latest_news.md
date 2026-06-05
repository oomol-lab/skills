# NewsData.io · `get_latest_news`

Retrieve the latest and breaking news from NewsData.io with optional filters.

- **Service**: `newsdata_io`
- **Action**: `get_latest_news`
- **Action id**: `newsdata_io.get_latest_news`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "newsdata_io" --action "get_latest_news"
```

## Run

```bash
oo connector run "newsdata_io" --action "get_latest_news" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
