# Currents API · `get_latest_news`

Retrieve the latest Currents news feed with optional language and region filters.

- **Service**: `currents_api`
- **Action**: `get_latest_news`
- **Action id**: `currents_api.get_latest_news`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "currents_api" --action "get_latest_news"
```

## Run

```bash
oo connector run "currents_api" --action "get_latest_news" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
