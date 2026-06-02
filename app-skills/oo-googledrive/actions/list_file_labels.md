# Google Drive · `list_file_labels`

List the Drive labels currently applied to a file.

- **Service**: `googledrive`
- **Action**: `list_file_labels`
- **Action id**: `googledrive.list_file_labels`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "list_file_labels"
```

## Run

```bash
oo connector run "googledrive" --action "list_file_labels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
