# Postman · `get_source_collections_status`

Tool to check whether there is a change between a forked collection and its parent (source) collection. Use when you need to determine if the source collection has updates that are not yet in the forked collection. This endpoint only works with forked collections; attempting to use it with regular collections will result in an error.

- **Service**: `postman`
- **Action**: `get_source_collections_status`
- **Action id**: `postman.get_source_collections_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_source_collections_status"
```

## Run

```bash
oo connector run "postman" --action "get_source_collections_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
