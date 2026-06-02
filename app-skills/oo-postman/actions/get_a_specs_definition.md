# Postman · `get_a_specs_definition`

Tool to get the complete contents of an API specification's definition. Use when you need to retrieve the full OpenAPI/Swagger specification content for a spec. Returns the raw definition content as a string.

- **Service**: `postman`
- **Action**: `get_a_specs_definition`
- **Action id**: `postman.get_a_specs_definition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_specs_definition"
```

## Run

```bash
oo connector run "postman" --action "get_a_specs_definition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
