# Dropbox · `upload_file`

Upload one file to Dropbox from inline text or base64 content.

- **Service**: `dropbox`
- **Action**: `upload_file`
- **Action id**: `dropbox.upload_file`
- **Required scopes**: files.content.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dropbox" --action "upload_file"
```

## Run

```bash
oo connector run "dropbox" --action "upload_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Dropbox state. Confirm the exact payload and intended effect with the user before running.
