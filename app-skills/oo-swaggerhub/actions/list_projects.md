# SwaggerHub · `list_projects`

List SwaggerHub projects for a specific owner.

- **Service**: `swaggerhub`
- **Action**: `list_projects`
- **Action id**: `swaggerhub.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "swaggerhub" --action "list_projects"
```

## Run

```bash
oo connector run "swaggerhub" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
