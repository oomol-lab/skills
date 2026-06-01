# Dropbox · `delete`

Delete one file or folder from Dropbox.

- **Service**: `dropbox`
- **Action**: `delete`
- **Action id**: `dropbox.delete`
- **Required scopes**: files.content.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dropbox" --action "delete"
```

## Run

```bash
oo connector run "dropbox" --action "delete" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Dropbox data. Always confirm the target and get explicit user approval before running.
