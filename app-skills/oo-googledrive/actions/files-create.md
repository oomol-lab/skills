# Google Drive · `files.create`

Create a Drive file with official File metadata and optional connector media upload content.

- **Service**: `googledrive`
- **Action**: `files.create`
- **Action id**: `googledrive.files.create`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "files.create"
```

## Run

```bash
oo connector run "googledrive" --action "files.create" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
