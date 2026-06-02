# ReadMe · `get_openapi_schema`

Get the OpenAPI definition for the ReadMe project.

- **Service**: `readme`
- **Action**: `get_openapi_schema`
- **Action id**: `readme.get_openapi_schema`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "get_openapi_schema"
```

## Run

```bash
oo connector run "readme" --action "get_openapi_schema" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
