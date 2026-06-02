# Google Drive · `get_revision`

Get metadata for a specific Drive file revision.

- **Service**: `googledrive`
- **Action**: `get_revision`
- **Action id**: `googledrive.get_revision`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "get_revision"
```

## Run

```bash
oo connector run "googledrive" --action "get_revision" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
