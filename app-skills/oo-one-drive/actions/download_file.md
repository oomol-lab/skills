# OneDrive · `download_file`

Download one file from OneDrive by item ID and upload it to transit storage.

- **Service**: `one_drive`
- **Action**: `download_file`
- **Action id**: `one_drive.download_file`
- **Required scopes**: one_drive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "one_drive" --action "download_file"
```

## Run

```bash
oo connector run "one_drive" --action "download_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
