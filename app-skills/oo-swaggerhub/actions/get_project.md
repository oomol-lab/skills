# SwaggerHub · `get_project`

Fetch a single SwaggerHub project by owner and project identifier.

- **Service**: `swaggerhub`
- **Action**: `get_project`
- **Action id**: `swaggerhub.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "swaggerhub" --action "get_project"
```

## Run

```bash
oo connector run "swaggerhub" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
