# Postman · `get_generated_spec`

Tool to retrieve the API specification generated for a Postman collection. Use when you need to fetch OpenAPI/Swagger specs that have been auto-generated from a collection. Returns metadata and an array of generated specifications.

- **Service**: `postman`
- **Action**: `get_generated_spec`
- **Action id**: `postman.get_generated_spec`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_generated_spec"
```

## Run

```bash
oo connector run "postman" --action "get_generated_spec" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
