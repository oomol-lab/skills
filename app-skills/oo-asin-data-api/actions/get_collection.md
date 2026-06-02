# ASIN Data API · `get_collection`

Get details of a specific ASIN Data API collection including status and request counts.

- **Service**: `asin_data_api`
- **Action**: `get_collection`
- **Action id**: `asin_data_api.get_collection`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asin_data_api" --action "get_collection"
```

## Run

```bash
oo connector run "asin_data_api" --action "get_collection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
