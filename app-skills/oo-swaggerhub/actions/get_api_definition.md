# SwaggerHub · `get_api_definition`

Fetch a SwaggerHub API definition in JSON or YAML format, with optional resolved and flattened output.

- **Service**: `swaggerhub`
- **Action**: `get_api_definition`
- **Action id**: `swaggerhub.get_api_definition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "swaggerhub" --action "get_api_definition"
```

## Run

```bash
oo connector run "swaggerhub" --action "get_api_definition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
