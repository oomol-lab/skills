# Currents API · `search_news`

Search Currents news articles with keyword, taxonomy, and time-range filters.

- **Service**: `currents_api`
- **Action**: `search_news`
- **Action id**: `currents_api.search_news`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "currents_api" --action "search_news"
```

## Run

```bash
oo connector run "currents_api" --action "search_news" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
