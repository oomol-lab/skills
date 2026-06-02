# Google Drive · `update_reply`

Update the content of an existing reply on a Drive file comment.

- **Service**: `googledrive`
- **Action**: `update_reply`
- **Action id**: `googledrive.update_reply`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "update_reply"
```

## Run

```bash
oo connector run "googledrive" --action "update_reply" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
