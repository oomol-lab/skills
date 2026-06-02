# Postman · `get_a_collections_forks`

Tool to get all forks of a specific collection. Use when you need to retrieve information about who has forked a collection, including fork IDs, users, and creation dates.

- **Service**: `postman`
- **Action**: `get_a_collections_forks`
- **Action id**: `postman.get_a_collections_forks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_collections_forks"
```

## Run

```bash
oo connector run "postman" --action "get_a_collections_forks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
