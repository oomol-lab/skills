# Alpha Vantage · `get_news_sentiment`

Retrieve raw live and historical market news and sentiment data.

- **Service**: `alpha_vantage`
- **Action**: `get_news_sentiment`
- **Action id**: `alpha_vantage.get_news_sentiment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_news_sentiment"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_news_sentiment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
