# SwaggerHub · `get_domain_definition`

Fetch a SwaggerHub domain definition in JSON or YAML format.

- **Service**: `swaggerhub`
- **Action**: `get_domain_definition`
- **Action id**: `swaggerhub.get_domain_definition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "swaggerhub" --action "get_domain_definition"
```

## Run

```bash
oo connector run "swaggerhub" --action "get_domain_definition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
