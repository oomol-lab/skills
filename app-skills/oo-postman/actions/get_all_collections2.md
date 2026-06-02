# Postman · `get_all_collections2`

Tool to get all collections accessible to the authenticated user. Use when you need to retrieve all your collections including subscribed collections. Returns detailed information for each collection including owner, creation/update timestamps, and visibility.

- **Service**: `postman`
- **Action**: `get_all_collections2`
- **Action id**: `postman.get_all_collections2`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_all_collections2"
```

## Run

```bash
oo connector run "postman" --action "get_all_collections2" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
