# Excel · `list_drive_item_children`

List direct child drive items for a folder or the drive root.

- **Service**: `excel`
- **Action**: `list_drive_item_children`
- **Action id**: `excel.list_drive_item_children`
- **Required scopes**: excel.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "list_drive_item_children"
```

## Run

```bash
oo connector run "excel" --action "list_drive_item_children" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
