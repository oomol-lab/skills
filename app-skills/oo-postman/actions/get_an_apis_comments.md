# Postman · `get_an_apis_comments`

Tool to retrieve all comments left by users in an API. Use when you need to fetch all comments associated with a specific API.

- **Service**: `postman`
- **Action**: `get_an_apis_comments`
- **Action id**: `postman.get_an_apis_comments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_an_apis_comments"
```

## Run

```bash
oo connector run "postman" --action "get_an_apis_comments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
