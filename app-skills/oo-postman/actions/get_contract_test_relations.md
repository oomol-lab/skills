# Postman · `get_contract_test_relations`

Tool to retrieve contract test relations for a specific API version. Use when you need to check contract test associations. Note: This endpoint is deprecated and may return limited or no data.

- **Service**: `postman`
- **Action**: `get_contract_test_relations`
- **Action id**: `postman.get_contract_test_relations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_contract_test_relations"
```

## Run

```bash
oo connector run "postman" --action "get_contract_test_relations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
