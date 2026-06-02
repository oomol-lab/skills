# Google Drive · `parse_file`

Compatibility alias of `download_file`, including export behavior when `mimeType` is provided.

- **Service**: `googledrive`
- **Action**: `parse_file`
- **Action id**: `googledrive.parse_file`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "parse_file"
```

## Run

```bash
oo connector run "googledrive" --action "parse_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
