# Dropbox · `get_metadata`

Get Dropbox metadata for one file or folder.

- **Service**: `dropbox`
- **Action**: `get_metadata`
- **Action id**: `dropbox.get_metadata`
- **Required scopes**: files.metadata.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dropbox" --action "get_metadata"
```

## Run

```bash
oo connector run "dropbox" --action "get_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
