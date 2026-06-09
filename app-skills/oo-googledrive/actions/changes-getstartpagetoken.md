# Google Drive · `changes.getStartPageToken`

Get the page token for monitoring future Drive changes.

- **Service**: `googledrive`
- **Action**: `changes.getStartPageToken`
- **Action id**: `googledrive.changes.getStartPageToken`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "changes.getStartPageToken"
```

## Run

```bash
oo connector run "googledrive" --action "changes.getStartPageToken" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
