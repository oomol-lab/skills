# Google Drive · `changes.list`

List file and drive changes for incremental sync workflows.

- **Service**: `googledrive`
- **Action**: `changes.list`
- **Action id**: `googledrive.changes.list`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "changes.list"
```

## Run

```bash
oo connector run "googledrive" --action "changes.list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
