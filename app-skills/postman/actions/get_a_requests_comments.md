# Postman · `get_a_requests_comments`

Tool to retrieve all comments left by users in a request. Use when you need to fetch all comments associated with a specific request within a collection.

- **Service**: `postman`
- **Action**: `get_a_requests_comments`
- **Action id**: `postman.get_a_requests_comments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_requests_comments"
```

## Run

```bash
oo connector run "postman" --action "get_a_requests_comments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
