# Google Drive · `copy_file`

Legacy compatibility alias of `copy_file_advanced` with a simplified input shape.

- **Service**: `googledrive`
- **Action**: `copy_file`
- **Action id**: `googledrive.copy_file`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "copy_file"
```

## Run

```bash
oo connector run "googledrive" --action "copy_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
