# Postman · `get_all_test_relations`

Tool to retrieve all test relations for a specific API version. Use when you need to get test relations associated with an API version. Note: This endpoint is deprecated in Postman v10 and higher.

- **Service**: `postman`
- **Action**: `get_all_test_relations`
- **Action id**: `postman.get_all_test_relations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_all_test_relations"
```

## Run

```bash
oo connector run "postman" --action "get_all_test_relations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
