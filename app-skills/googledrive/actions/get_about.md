# Google Drive · `get_about`

Get Drive account information such as user details, quota, and supported capabilities.

- **Service**: `googledrive`
- **Action**: `get_about`
- **Action id**: `googledrive.get_about`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "get_about"
```

## Run

```bash
oo connector run "googledrive" --action "get_about" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
