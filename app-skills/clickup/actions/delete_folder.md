# ClickUp · `delete_folder`

Delete a ClickUp folder by folder ID.

- **Service**: `clickup`
- **Action**: `delete_folder`
- **Action id**: `clickup.delete_folder`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "delete_folder"
```

## Run

```bash
oo connector run "clickup" --action "delete_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ClickUp data. Always confirm the target and get explicit user approval before running.
