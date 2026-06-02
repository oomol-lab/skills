# Google Drive · `get_app`

Get metadata for a specific Google Drive app by app ID.

- **Service**: `googledrive`
- **Action**: `get_app`
- **Action id**: `googledrive.get_app`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "get_app"
```

## Run

```bash
oo connector run "googledrive" --action "get_app" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
