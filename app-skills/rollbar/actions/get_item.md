# Rollbar · `get_item`

Get one Rollbar item by item ID.

- **Service**: `rollbar`
- **Action**: `get_item`
- **Action id**: `rollbar.get_item`
- **Required scopes**: rollbar.project.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rollbar" --action "get_item"
```

## Run

```bash
oo connector run "rollbar" --action "get_item" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
