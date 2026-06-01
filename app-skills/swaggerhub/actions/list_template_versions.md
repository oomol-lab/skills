# SwaggerHub · `list_template_versions`

List the versions available for a specific SwaggerHub template.

- **Service**: `swaggerhub`
- **Action**: `list_template_versions`
- **Action id**: `swaggerhub.list_template_versions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "swaggerhub" --action "list_template_versions"
```

## Run

```bash
oo connector run "swaggerhub" --action "list_template_versions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
