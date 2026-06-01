# Postman · `delete_a_folders_comment`

Tool to delete a comment from a folder. Use when you need to remove a specific comment from a folder. Returns HTTP 204 No Content on successful deletion.

- **Service**: `postman`
- **Action**: `delete_a_folders_comment`
- **Action id**: `postman.delete_a_folders_comment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "delete_a_folders_comment"
```

## Run

```bash
oo connector run "postman" --action "delete_a_folders_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Postman data. Always confirm the target and get explicit user approval before running.
