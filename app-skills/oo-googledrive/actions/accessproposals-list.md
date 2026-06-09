# Google Drive · `accessproposals.list`

List pending access proposals for a specific Drive file.

- **Service**: `googledrive`
- **Action**: `accessproposals.list`
- **Action id**: `googledrive.accessproposals.list`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "accessproposals.list"
```

## Run

```bash
oo connector run "googledrive" --action "accessproposals.list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
