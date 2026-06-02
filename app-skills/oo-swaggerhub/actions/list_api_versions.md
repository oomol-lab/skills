# SwaggerHub · `list_api_versions`

List the versions available for a specific SwaggerHub API.

- **Service**: `swaggerhub`
- **Action**: `list_api_versions`
- **Action id**: `swaggerhub.list_api_versions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "swaggerhub" --action "list_api_versions"
```

## Run

```bash
oo connector run "swaggerhub" --action "list_api_versions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
