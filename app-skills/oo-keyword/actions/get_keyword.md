# Keyword.com · `get_keyword`

Get one Keyword.com keyword and its ranking data by project and keyword ID.

- **Service**: `keyword`
- **Action**: `get_keyword`
- **Action id**: `keyword.get_keyword`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keyword" --action "get_keyword"
```

## Run

```bash
oo connector run "keyword" --action "get_keyword" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
