# Vimeo · `delete_folder`

Delete a Vimeo folder, optionally deleting the videos inside it.

- **Service**: `vimeo`
- **Action**: `delete_folder`
- **Action id**: `vimeo.delete_folder`
- **Required scopes**: vimeo.delete

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "delete_folder"
```

## Run

```bash
oo connector run "vimeo" --action "delete_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Vimeo data. Always confirm the target and get explicit user approval before running.
