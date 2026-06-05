# NewsData.io · `list_crypto_news`

Retrieve cryptocurrency-related news articles from NewsData.io.

- **Service**: `newsdata_io`
- **Action**: `list_crypto_news`
- **Action id**: `newsdata_io.list_crypto_news`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "newsdata_io" --action "list_crypto_news"
```

## Run

```bash
oo connector run "newsdata_io" --action "list_crypto_news" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
