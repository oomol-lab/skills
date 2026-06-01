# Postman · `transform_collection_to_openapi`

Tool to transform an existing Postman Collection into a stringified OpenAPI 3.0.3 definition. Use when you need to convert a collection to OpenAPI format for API documentation or interoperability with other tools.

- **Service**: `postman`
- **Action**: `transform_collection_to_openapi`
- **Action id**: `postman.transform_collection_to_openapi`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "transform_collection_to_openapi"
```

## Run

```bash
oo connector run "postman" --action "transform_collection_to_openapi" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
