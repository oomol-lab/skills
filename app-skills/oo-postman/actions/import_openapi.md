# Postman · `import_openapi`

Tool to import an OpenAPI specification into Postman as a new collection. Use when you need to convert an OpenAPI 3.0+ specification into a Postman collection within a specific workspace. The imported specification will be automatically converted to a Postman collection with all endpoints, request parameters, and documentation.

- **Service**: `postman`
- **Action**: `import_openapi`
- **Action id**: `postman.import_openapi`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "import_openapi"
```

## Run

```bash
oo connector run "postman" --action "import_openapi" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
