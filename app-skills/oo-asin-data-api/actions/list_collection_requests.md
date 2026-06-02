# ASIN Data API · `list_collection_requests`

List requests in an ASIN Data API collection by page.

- **Service**: `asin_data_api`
- **Action**: `list_collection_requests`
- **Action id**: `asin_data_api.list_collection_requests`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asin_data_api" --action "list_collection_requests"
```

## Run

```bash
oo connector run "asin_data_api" --action "list_collection_requests" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
