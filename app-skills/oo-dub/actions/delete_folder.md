# Dub · `delete_folder`

Delete a folder from the authenticated Dub workspace.

- **Service**: `dub`
- **Action**: `delete_folder`
- **Action id**: `dub.delete_folder`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dub" --action "delete_folder"
```

## Run

```bash
oo connector run "dub" --action "delete_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Dub data. Always confirm the target and get explicit user approval before running.
