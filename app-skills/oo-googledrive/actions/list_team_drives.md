# Google Drive · `list_team_drives`

Legacy compatibility alias of `list_shared_drives` for Team Drives.

- **Service**: `googledrive`
- **Action**: `list_team_drives`
- **Action id**: `googledrive.list_team_drives`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "list_team_drives"
```

## Run

```bash
oo connector run "googledrive" --action "list_team_drives" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
