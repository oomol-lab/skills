# Postman · `get_all_api_releases`

Tool to get all releases for a specific API version in Postman. Use when you need to list releases for an API version. Note: This endpoint is deprecated in Postman v10 and higher.

- **Service**: `postman`
- **Action**: `get_all_api_releases`
- **Action id**: `postman.get_all_api_releases`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_all_api_releases"
```

## Run

```bash
oo connector run "postman" --action "get_all_api_releases" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
