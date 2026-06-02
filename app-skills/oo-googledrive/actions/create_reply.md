# Google Drive · `create_reply`

Create a reply under an existing Drive file comment, or use an action payload such as resolve or reopen.

- **Service**: `googledrive`
- **Action**: `create_reply`
- **Action id**: `googledrive.create_reply`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "create_reply"
```

## Run

```bash
oo connector run "googledrive" --action "create_reply" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
