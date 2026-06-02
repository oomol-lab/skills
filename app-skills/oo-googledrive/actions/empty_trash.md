# Google Drive · `empty_trash`

Permanently empty the user's trash or a shared drive's trash.

- **Service**: `googledrive`
- **Action**: `empty_trash`
- **Action id**: `googledrive.empty_trash`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "empty_trash"
```

## Run

```bash
oo connector run "googledrive" --action "empty_trash" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Drive data. Always confirm the target and get explicit user approval before running.
