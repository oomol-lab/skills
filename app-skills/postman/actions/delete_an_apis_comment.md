# Postman · `delete_an_apis_comment`

Tool to delete a comment from an API. Use when you need to remove a comment from a specific API. On success, this returns an HTTP 204 No Content response indicating the comment was successfully deleted.

- **Service**: `postman`
- **Action**: `delete_an_apis_comment`
- **Action id**: `postman.delete_an_apis_comment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "delete_an_apis_comment"
```

## Run

```bash
oo connector run "postman" --action "delete_an_apis_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Postman data. Always confirm the target and get explicit user approval before running.
