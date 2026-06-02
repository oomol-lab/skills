# Rollbar · `list_item_occurrences`

List occurrences for one Rollbar item.

- **Service**: `rollbar`
- **Action**: `list_item_occurrences`
- **Action id**: `rollbar.list_item_occurrences`
- **Required scopes**: rollbar.project.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rollbar" --action "list_item_occurrences"
```

## Run

```bash
oo connector run "rollbar" --action "list_item_occurrences" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
