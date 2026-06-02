# SwaggerHub · `list_templates`

List SwaggerHub templates, optionally filtered by owner.

- **Service**: `swaggerhub`
- **Action**: `list_templates`
- **Action id**: `swaggerhub.list_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "swaggerhub" --action "list_templates"
```

## Run

```bash
oo connector run "swaggerhub" --action "list_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
