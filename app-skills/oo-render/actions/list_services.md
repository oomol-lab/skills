# Render · `list_services`

List Render services with optional workspace, type, and suspension filters.

- **Service**: `render`
- **Action**: `list_services`
- **Action id**: `render.list_services`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "render" --action "list_services"
```

## Run

```bash
oo connector run "render" --action "list_services" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
