# Postman · `delete_a_workspace`

Tool to delete a Postman workspace permanently. Use when you need to remove a workspace and all its contents. Deletion is permanent and cannot be undone.

- **Service**: `postman`
- **Action**: `delete_a_workspace`
- **Action id**: `postman.delete_a_workspace`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "delete_a_workspace"
```

## Run

```bash
oo connector run "postman" --action "delete_a_workspace" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Postman data. Always confirm the target and get explicit user approval before running.
