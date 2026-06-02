# Postman · `generate_spec_from_collection`

Tool to generate an API specification from a Postman collection. Use when you need to create an OpenAPI 3.0 specification from an existing collection. The operation is asynchronous and returns a task ID and polling URL to check the generation status.

- **Service**: `postman`
- **Action**: `generate_spec_from_collection`
- **Action id**: `postman.generate_spec_from_collection`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "generate_spec_from_collection"
```

## Run

```bash
oo connector run "postman" --action "generate_spec_from_collection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
