# Monday · `archive_item`

Archive a Monday item.

- **Service**: `monday`
- **Action**: `archive_item`
- **Action id**: `monday.archive_item`
- **Required scopes**: boards:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "archive_item"
```

## Run

```bash
oo connector run "monday" --action "archive_item" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
