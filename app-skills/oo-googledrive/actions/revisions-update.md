# Google Drive · `revisions.update`

Update revision metadata flags on a specific Drive file revision.

- **Service**: `googledrive`
- **Action**: `revisions.update`
- **Action id**: `googledrive.revisions.update`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "revisions.update"
```

## Run

```bash
oo connector run "googledrive" --action "revisions.update" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
