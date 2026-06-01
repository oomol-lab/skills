# Postman · `get_all_apis`

Tool to get all APIs accessible to the authenticated user with optional workspace filtering. Use when you need to list or retrieve APIs from Postman. Returns an array of API objects with their IDs, names, summaries, and other metadata.

- **Service**: `postman`
- **Action**: `get_all_apis`
- **Action id**: `postman.get_all_apis`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_all_apis"
```

## Run

```bash
oo connector run "postman" --action "get_all_apis" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
