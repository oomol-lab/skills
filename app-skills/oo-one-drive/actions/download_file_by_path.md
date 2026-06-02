# OneDrive · `download_file_by_path`

Download one file from OneDrive by path and upload it to transit storage.

- **Service**: `one_drive`
- **Action**: `download_file_by_path`
- **Action id**: `one_drive.download_file_by_path`
- **Required scopes**: one_drive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "one_drive" --action "download_file_by_path"
```

## Run

```bash
oo connector run "one_drive" --action "download_file_by_path" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
