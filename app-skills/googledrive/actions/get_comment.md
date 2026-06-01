# Google Drive · `get_comment`

Get a specific comment on a Drive file by comment ID.

- **Service**: `googledrive`
- **Action**: `get_comment`
- **Action id**: `googledrive.get_comment`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "get_comment"
```

## Run

```bash
oo connector run "googledrive" --action "get_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
