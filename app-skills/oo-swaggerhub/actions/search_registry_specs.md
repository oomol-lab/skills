# SwaggerHub · `search_registry_specs`

Search SwaggerHub registry items across APIs, domains, and templates using the unified /specs listing.

- **Service**: `swaggerhub`
- **Action**: `search_registry_specs`
- **Action id**: `swaggerhub.search_registry_specs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "swaggerhub" --action "search_registry_specs"
```

## Run

```bash
oo connector run "swaggerhub" --action "search_registry_specs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
