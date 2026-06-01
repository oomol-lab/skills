# Canva · `list_folder_items`

List Canva folder contents, including folders, designs, and image assets, with pagination and filtering options.

- **Service**: `canva`
- **Action**: `list_folder_items`
- **Action id**: `canva.list_folder_items`
- **Required scopes**: canva.folder.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canva" --action "list_folder_items"
```

## Run

```bash
oo connector run "canva" --action "list_folder_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
