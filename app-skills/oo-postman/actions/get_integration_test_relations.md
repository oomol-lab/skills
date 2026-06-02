# Postman · `get_integration_test_relations`

Tool to get integration test relations for a specific API version. This endpoint is deprecated and may not return active data.

- **Service**: `postman`
- **Action**: `get_integration_test_relations`
- **Action id**: `postman.get_integration_test_relations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_integration_test_relations"
```

## Run

```bash
oo connector run "postman" --action "get_integration_test_relations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
