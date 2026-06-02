# Dev.to · `list_organization_articles`

List articles under a Dev.to organization.

- **Service**: `devto`
- **Action**: `list_organization_articles`
- **Action id**: `devto.list_organization_articles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "devto" --action "list_organization_articles"
```

## Run

```bash
oo connector run "devto" --action "list_organization_articles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
