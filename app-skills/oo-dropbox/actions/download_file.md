# Dropbox · `download_file`

Download one Dropbox file and upload it to transit storage.

- **Service**: `dropbox`
- **Action**: `download_file`
- **Action id**: `dropbox.download_file`
- **Required scopes**: files.content.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dropbox" --action "download_file"
```

## Run

```bash
oo connector run "dropbox" --action "download_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
