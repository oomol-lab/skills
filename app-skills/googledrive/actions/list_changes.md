# Google Drive · `list_changes`

List file and drive changes for incremental sync workflows.

- **Service**: `googledrive`
- **Action**: `list_changes`
- **Action id**: `googledrive.list_changes`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "list_changes"
```

## Run

```bash
oo connector run "googledrive" --action "list_changes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
