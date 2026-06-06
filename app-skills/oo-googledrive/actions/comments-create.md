# Google Drive · `comments.create`

Create a comment on a Drive file, optionally with anchor or quoted file content.

- **Service**: `googledrive`
- **Action**: `comments.create`
- **Action id**: `googledrive.comments.create`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "comments.create"
```

## Run

```bash
oo connector run "googledrive" --action "comments.create" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
