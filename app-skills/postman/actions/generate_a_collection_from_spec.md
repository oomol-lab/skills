# Postman · `generate_a_collection_from_spec`

Tool to generate a Postman collection from an OpenAPI 2.0, 3.0, or 3.1 specification. Use when you need to create a collection from an existing API spec. The operation is asynchronous and returns a task ID and polling URL to check the generation status.

- **Service**: `postman`
- **Action**: `generate_a_collection_from_spec`
- **Action id**: `postman.generate_a_collection_from_spec`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "generate_a_collection_from_spec"
```

## Run

```bash
oo connector run "postman" --action "generate_a_collection_from_spec" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
