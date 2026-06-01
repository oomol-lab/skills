# Postman · `get_test_suite_relations`

Tool to get test suite relations for a specific API version. Use when you need to retrieve the test suites associated with an API version. Note: This endpoint is deprecated and only works with legacy v9 APIs. For v10+ APIs, this returns an empty array.

- **Service**: `postman`
- **Action**: `get_test_suite_relations`
- **Action id**: `postman.get_test_suite_relations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_test_suite_relations"
```

## Run

```bash
oo connector run "postman" --action "get_test_suite_relations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
