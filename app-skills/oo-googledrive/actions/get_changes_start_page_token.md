# Google Drive · `get_changes_start_page_token`

Get the page token for monitoring future Drive changes.

- **Service**: `googledrive`
- **Action**: `get_changes_start_page_token`
- **Action id**: `googledrive.get_changes_start_page_token`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "get_changes_start_page_token"
```

## Run

```bash
oo connector run "googledrive" --action "get_changes_start_page_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
