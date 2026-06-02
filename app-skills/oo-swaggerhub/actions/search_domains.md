# SwaggerHub · `search_domains`

Search SwaggerHub domains using the registry search endpoint.

- **Service**: `swaggerhub`
- **Action**: `search_domains`
- **Action id**: `swaggerhub.search_domains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "swaggerhub" --action "search_domains"
```

## Run

```bash
oo connector run "swaggerhub" --action "search_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
