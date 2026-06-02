# SwaggerHub · `get_template_definition`

Fetch a SwaggerHub template definition in JSON or YAML format, with optional flattening.

- **Service**: `swaggerhub`
- **Action**: `get_template_definition`
- **Action id**: `swaggerhub.get_template_definition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "swaggerhub" --action "get_template_definition"
```

## Run

```bash
oo connector run "swaggerhub" --action "get_template_definition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
