# Postman · `get_collection_access_keys`

Tool to retrieve all personal and team collection access keys for the authenticated user. Use when you need to list or manage collection access keys. Returns an array of access key objects with their IDs, tokens, status, and associated collection information.

- **Service**: `postman`
- **Action**: `get_collection_access_keys`
- **Action id**: `postman.get_collection_access_keys`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_collection_access_keys"
```

## Run

```bash
oo connector run "postman" --action "get_collection_access_keys" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
