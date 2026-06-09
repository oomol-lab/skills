# Google Drive · `drives.update`

Update metadata or restrictions on a shared drive.

- **Service**: `googledrive`
- **Action**: `drives.update`
- **Action id**: `googledrive.drives.update`
- **Required scopes**: googledrive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledrive" --action "drives.update"
```

## Run

```bash
oo connector run "googledrive" --action "drives.update" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Drive state. Confirm the exact payload and intended effect with the user before running.
