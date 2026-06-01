# ASIN Data API · `clear_collection_requests`

Delete multiple requests from a collection by their request IDs in ASIN Data API.

- **Service**: `asin_data_api`
- **Action**: `clear_collection_requests`
- **Action id**: `asin_data_api.clear_collection_requests`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asin_data_api" --action "clear_collection_requests"
```

## Run

```bash
oo connector run "asin_data_api" --action "clear_collection_requests" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ASIN Data API data. Always confirm the target and get explicit user approval before running.
