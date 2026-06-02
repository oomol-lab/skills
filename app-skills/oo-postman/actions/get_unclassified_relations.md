# Postman · `get_unclassified_relations`

Tool to get unclassified relations for an API version in Postman. Use when you need to retrieve unclassified relations for a specific API version. This endpoint is for Postman v10 and higher.

- **Service**: `postman`
- **Action**: `get_unclassified_relations`
- **Action id**: `postman.get_unclassified_relations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_unclassified_relations"
```

## Run

```bash
oo connector run "postman" --action "get_unclassified_relations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
