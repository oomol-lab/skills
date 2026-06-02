# Google Drive · `create_file_from_text`

Create a new Drive file from text content and optional metadata.

- **Service**: `googledrive`
- **Action**: `create_file_from_text`
- **Action id**: `googledrive.create_file_from_text`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "create_file_from_text"
```

## Run

```bash
oo connector run "googledrive" --action "create_file_from_text" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
