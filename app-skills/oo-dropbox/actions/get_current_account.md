# Dropbox · `get_current_account`

Get basic profile information for the current Dropbox account.

- **Service**: `dropbox`
- **Action**: `get_current_account`
- **Action id**: `dropbox.get_current_account`
- **Required scopes**: account_info.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dropbox" --action "get_current_account"
```

## Run

```bash
oo connector run "dropbox" --action "get_current_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
