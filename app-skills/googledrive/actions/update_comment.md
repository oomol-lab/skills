# Google Drive · `update_comment`

Update the content of an existing Drive file comment.

- **Service**: `googledrive`
- **Action**: `update_comment`
- **Action id**: `googledrive.update_comment`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "update_comment"
```

## Run

```bash
oo connector run "googledrive" --action "update_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
