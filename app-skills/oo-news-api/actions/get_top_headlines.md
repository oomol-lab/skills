# News API · `get_top_headlines`

Retrieve current top and breaking headlines using the official top headlines endpoint.

- **Service**: `news_api`
- **Action**: `get_top_headlines`
- **Action id**: `news_api.get_top_headlines`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "news_api" --action "get_top_headlines"
```

## Run

```bash
oo connector run "news_api" --action "get_top_headlines" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
