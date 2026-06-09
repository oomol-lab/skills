# Google Drive · `replies.create`

Create a reply under an existing Drive file comment.

- **Service**: `googledrive`
- **Action**: `replies.create`
- **Action id**: `googledrive.replies.create`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "replies.create"
```

## Run

```bash
oo connector run "googledrive" --action "replies.create" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
