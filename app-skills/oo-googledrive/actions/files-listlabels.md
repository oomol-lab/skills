# Google Drive · `files.listLabels`

List the Drive labels currently applied to a file.

- **Service**: `googledrive`
- **Action**: `files.listLabels`
- **Action id**: `googledrive.files.listLabels`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "files.listLabels"
```

## Run

```bash
oo connector run "googledrive" --action "files.listLabels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
