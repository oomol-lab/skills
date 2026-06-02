# Postman · `delete_a_folder`

Tool to delete a folder in a Postman collection. Use when you need to remove a folder and all its contents from a collection. The folder ID should not contain spaces to avoid 404 errors.

- **Service**: `postman`
- **Action**: `delete_a_folder`
- **Action id**: `postman.delete_a_folder`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "delete_a_folder"
```

## Run

```bash
oo connector run "postman" --action "delete_a_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Postman data. Always confirm the target and get explicit user approval before running.
