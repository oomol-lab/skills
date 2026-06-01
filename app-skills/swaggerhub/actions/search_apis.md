# SwaggerHub · `search_apis`

Search SwaggerHub APIs using the registry search endpoint.

- **Service**: `swaggerhub`
- **Action**: `search_apis`
- **Action id**: `swaggerhub.search_apis`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "swaggerhub" --action "search_apis"
```

## Run

```bash
oo connector run "swaggerhub" --action "search_apis" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
