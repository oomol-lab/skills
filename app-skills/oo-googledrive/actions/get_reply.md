# Google Drive · `get_reply`

Get a specific reply under a Drive file comment.

- **Service**: `googledrive`
- **Action**: `get_reply`
- **Action id**: `googledrive.get_reply`
- **Required scopes**: googledrive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "get_reply"
```

## Run

```bash
oo connector run "googledrive" --action "get_reply" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
