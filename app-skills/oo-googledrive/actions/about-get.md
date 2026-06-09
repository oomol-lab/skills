# Google Drive · `about.get`

Get Drive account information such as user details, quota, and supported capabilities.

- **Service**: `googledrive`
- **Action**: `about.get`
- **Action id**: `googledrive.about.get`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "about.get"
```

## Run

```bash
oo connector run "googledrive" --action "about.get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
