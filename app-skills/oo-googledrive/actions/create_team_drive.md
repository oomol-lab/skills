# Google Drive · `create_team_drive`

Legacy compatibility alias of `create_drive` for Team Drives.

- **Service**: `googledrive`
- **Action**: `create_team_drive`
- **Action id**: `googledrive.create_team_drive`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "create_team_drive"
```

## Run

```bash
oo connector run "googledrive" --action "create_team_drive" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
