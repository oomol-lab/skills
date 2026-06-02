# OneDrive · `upload_file`

Upload one file to OneDrive, optionally creating destination folders on the way.

- **Service**: `one_drive`
- **Action**: `upload_file`
- **Action id**: `one_drive.upload_file`
- **Required scopes**: one_drive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "one_drive" --action "upload_file"
```

## Run

```bash
oo connector run "one_drive" --action "upload_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OneDrive state. Confirm the exact payload and intended effect with the user before running.
