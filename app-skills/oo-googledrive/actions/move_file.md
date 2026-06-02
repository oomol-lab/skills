# Google Drive · `move_file`

Move or rename a Drive file by updating parents and/or name.

- **Service**: `googledrive`
- **Action**: `move_file`
- **Action id**: `googledrive.move_file`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "move_file"
```

## Run

```bash
oo connector run "googledrive" --action "move_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
