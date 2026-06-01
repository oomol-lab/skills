# Dropbox · `create_folder`

Create one folder in Dropbox.

- **Service**: `dropbox`
- **Action**: `create_folder`
- **Action id**: `dropbox.create_folder`
- **Required scopes**: files.content.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dropbox" --action "create_folder"
```

## Run

```bash
oo connector run "dropbox" --action "create_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Dropbox state. Confirm the exact payload and intended effect with the user before running.
