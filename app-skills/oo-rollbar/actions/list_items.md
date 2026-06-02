# Rollbar · `list_items`

List Rollbar items in the connected project with optional filters.

- **Service**: `rollbar`
- **Action**: `list_items`
- **Action id**: `rollbar.list_items`
- **Required scopes**: rollbar.project.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rollbar" --action "list_items"
```

## Run

```bash
oo connector run "rollbar" --action "list_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
