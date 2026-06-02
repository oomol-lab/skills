# News API · `get_sources`

List available news sources using the official sources endpoint.

- **Service**: `news_api`
- **Action**: `get_sources`
- **Action id**: `news_api.get_sources`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "news_api" --action "get_sources"
```

## Run

```bash
oo connector run "news_api" --action "get_sources" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
