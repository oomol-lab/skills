# Postman · `get_a_collections_pull_requests`

Tool to get information about a collection's pull requests including source and destination IDs, status, and URLs. Use when you need to retrieve pull request details for a specific collection.

- **Service**: `postman`
- **Action**: `get_a_collections_pull_requests`
- **Action id**: `postman.get_a_collections_pull_requests`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_collections_pull_requests"
```

## Run

```bash
oo connector run "postman" --action "get_a_collections_pull_requests" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
