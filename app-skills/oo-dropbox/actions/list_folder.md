# Dropbox · `list_folder`

List files and folders inside one Dropbox folder.

- **Service**: `dropbox`
- **Action**: `list_folder`
- **Action id**: `dropbox.list_folder`
- **Required scopes**: files.metadata.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dropbox" --action "list_folder"
```

## Run

```bash
oo connector run "dropbox" --action "list_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
