# OneDrive · `list_folder_children`

List the direct children of a folder in OneDrive.

- **Service**: `one_drive`
- **Action**: `list_folder_children`
- **Action id**: `one_drive.list_folder_children`
- **Required scopes**: one_drive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "one_drive" --action "list_folder_children"
```

## Run

```bash
oo connector run "one_drive" --action "list_folder_children" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
