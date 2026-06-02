# Google Drive · `modify_file_labels`

Add, update, or remove Drive labels on a file.

- **Service**: `googledrive`
- **Action**: `modify_file_labels`
- **Action id**: `googledrive.modify_file_labels`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "modify_file_labels"
```

## Run

```bash
oo connector run "googledrive" --action "modify_file_labels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
