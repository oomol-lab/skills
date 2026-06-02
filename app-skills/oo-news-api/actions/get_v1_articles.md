# News API · `get_v1_articles`

Provide a compatibility wrapper for the legacy v1 articles action by using the current top headlines endpoint with a single source.

- **Service**: `news_api`
- **Action**: `get_v1_articles`
- **Action id**: `news_api.get_v1_articles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "news_api" --action "get_v1_articles"
```

## Run

```bash
oo connector run "news_api" --action "get_v1_articles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
