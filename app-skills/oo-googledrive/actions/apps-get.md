# Google Drive · `apps.get`

Get metadata for a specific Google Drive app by app ID.

- **Service**: `googledrive`
- **Action**: `apps.get`
- **Action id**: `googledrive.apps.get`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "apps.get"
```

## Run

```bash
oo connector run "googledrive" --action "apps.get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
