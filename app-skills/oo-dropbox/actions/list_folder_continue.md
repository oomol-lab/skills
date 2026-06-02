# Dropbox · `list_folder_continue`

Continue a previous Dropbox folder listing with a cursor.

- **Service**: `dropbox`
- **Action**: `list_folder_continue`
- **Action id**: `dropbox.list_folder_continue`
- **Required scopes**: files.metadata.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dropbox" --action "list_folder_continue"
```

## Run

```bash
oo connector run "dropbox" --action "list_folder_continue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
