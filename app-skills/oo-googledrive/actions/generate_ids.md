# Google Drive · `generate_ids`

Generate one or more Drive file IDs for later create or copy requests.

- **Service**: `googledrive`
- **Action**: `generate_ids`
- **Action id**: `googledrive.generate_ids`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "generate_ids"
```

## Run

```bash
oo connector run "googledrive" --action "generate_ids" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
