# Postman · `get_all_linked_relations`

Tool to retrieve all linked relations for a specific API version in Postman. Use when you need to discover what collections, documentation, mocks, or monitors are linked to an API version.

- **Service**: `postman`
- **Action**: `get_all_linked_relations`
- **Action id**: `postman.get_all_linked_relations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_all_linked_relations"
```

## Run

```bash
oo connector run "postman" --action "get_all_linked_relations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
