# News API · `get_everything`

Search every article published by News API using the official everything endpoint.

- **Service**: `news_api`
- **Action**: `get_everything`
- **Action id**: `news_api.get_everything`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "news_api" --action "get_everything"
```

## Run

```bash
oo connector run "news_api" --action "get_everything" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
