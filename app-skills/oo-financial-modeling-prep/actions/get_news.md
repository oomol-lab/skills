# Financial Modeling Prep · `get_news`

Retrieve latest or symbol-filtered Financial Modeling Prep news.

- **Service**: `financial_modeling_prep`
- **Action**: `get_news`
- **Action id**: `financial_modeling_prep.get_news`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_news"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_news" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
