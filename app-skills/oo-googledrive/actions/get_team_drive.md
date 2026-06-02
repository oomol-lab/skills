# Google Drive · `get_team_drive`

Legacy compatibility alias of `get_drive` for Team Drives.

- **Service**: `googledrive`
- **Action**: `get_team_drive`
- **Action id**: `googledrive.get_team_drive`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "get_team_drive"
```

## Run

```bash
oo connector run "googledrive" --action "get_team_drive" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
