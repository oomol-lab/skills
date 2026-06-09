# Google Drive · `comments.update`

Update the content of an existing Drive file comment.

- **Service**: `googledrive`
- **Action**: `comments.update`
- **Action id**: `googledrive.comments.update`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "comments.update"
```

## Run

```bash
oo connector run "googledrive" --action "comments.update" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
