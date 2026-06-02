# Postman · `get_all_forked_collections`

Tool to retrieve all forked collections for the authenticated user. Use when you need to list or access all collections that the user has forked.

- **Service**: `postman`
- **Action**: `get_all_forked_collections`
- **Action id**: `postman.get_all_forked_collections`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_all_forked_collections"
```

## Run

```bash
oo connector run "postman" --action "get_all_forked_collections" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
