# Dropbox · `copy`

Copy one file or folder to another Dropbox path.

- **Service**: `dropbox`
- **Action**: `copy`
- **Action id**: `dropbox.copy`
- **Required scopes**: files.content.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dropbox" --action "copy"
```

## Run

```bash
oo connector run "dropbox" --action "copy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Dropbox state. Confirm the exact payload and intended effect with the user before running.
