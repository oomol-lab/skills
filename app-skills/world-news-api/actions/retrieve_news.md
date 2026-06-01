# World News API · `retrieve_news`

Retrieve one or more articles by identifier from World News API.

- **Service**: `world_news_api`
- **Action**: `retrieve_news`
- **Action id**: `world_news_api.retrieve_news`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "world_news_api" --action "retrieve_news"
```

## Run

```bash
oo connector run "world_news_api" --action "retrieve_news" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
